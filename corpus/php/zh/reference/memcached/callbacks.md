---
id: "zh-php-guide-memcached-callbacks"
language: "php"
lang: "zh"
category: "guide"
name: "memcached.callbacks"
title: "回调"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.callbacks.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 回调

## 结果回调

结果 `callable` 由 `Memcached::getDelayed()` 或 `Memcached::getDelayedBykey()` 方法对结果集中的每个项目进行调用。回调函数可以接收到一个 Memcached 对象合一个数组描述的元素信息，此回调函数不需要返回任何信息。

**结果回调示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);
$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items);
$m->getDelayed(array('key1', 'key3'), true, 'result_cb');

function result_cb($memc, $item)
{
    var_dump($item);
}
?>

   
```

以上示例的输出类似于：

```text


array(3) {
  ["key"]=>
  string(4) "key1"
  ["value"]=>
  string(6) "value1"
  ["cas"]=>
  float(49)
}
array(3) {
  ["key"]=>
  string(4) "key3"
  ["value"]=>
  string(6) "value3"
  ["cas"]=>
  float(50)
}

   
```

## 通读缓存回调

通读缓存回调在一个元素没有从服务端检索到的时候被调用。这个回调函数会接收到 Memcached 对象，请求的 key 以及 一个引用方式传递的值变量等三个参数。此回调函数负责通过返回 true 或 false 来决定在 key 没有值时设置一个默认值。 如果回调返回 true，Memcached 会存储"传出参数"(引用传递的值变量)存储的值到 memcached 服务端并将其返回到原来 的调用函数中。仅仅 `Memcached::get()` 和 `Memcached::getByKey()` 支持这类回调，因为 Memcache 协议不支持在请求多个 key 时提供未检索到 key 的信息。

**通读回调示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$profile_info = $m->get('user:'.$user_id, 'user_info_cb');

function user_info_cb($memc, $key, &$value)
{
    $user_id = substr($key, 5);
    /* 从数据库读取个人信息 */
    /* ... */
    $value = $profile_info;
    return true;
}
?>

   
```
