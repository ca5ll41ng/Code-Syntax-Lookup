---
id: "zh-php-function-memcached-getmulti"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getMulti"
title: "检索多个元素"
signature: "public array|false Memcached::getMulti(array $keys, int $get_flags = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getmulti.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索多个元素

## 说明

```php
public array|false Memcached::getMulti(array $keys, int $get_flags = 0)
```

`Memcached::getMulti()` 与 `Memcached::get()` 类似，但是这个方法用来检索 `$keys` 数组指定的多个 key 对应的元素。

> 在 v3.0 之前，使用的第二个参数是 `$cas_tokens`。 它会填充进元素的 CAS token 值。 在本扩展里，`$cas_tokens` 参数在 v3.0 中已经移除。 它被新的附加选项（flag） `Memcached::GET_EXTENDED` 代替，需要在 `$get_flags` 值里使用。

`$get_flags`参数可以用做指定`Memcached::getMulti()`的附加选项。 当前，仅可以指定为`Memcached::GET_PRESERVE_ORDER`以保证返回的key的顺序和请求时一致。 `Memcached::GET_EXTENDED` 可以确保同时返回了 CAS token 信息。

## 参数

- **`$keys`** — 要检索的key的数组。
- **`$get_flags`** — Get 操作的附加选项。

## 返回值

返回检索到的元素的数组 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL memcached 3.0.0 | 移除 `$cas_tokens` 参数。 新增 `Memcached::GET_EXTENDED`，当作为 flag 传递时，确保获取到 CAS token。 |

## 示例

**`Memcached::getMulti()` 的 Memcached v3 示例**

```php


<?php
// 扩展版本 v3 有效

$m = new Memcached();
$m->addServer('localhost', 11211);

$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items);
$result = $m->getMulti(array('key1', 'key3', 'badkey'));
var_dump($result);
?>

    
```

以上示例的输出类似于：

```text


array(2) {
  ["key1"]=>
  string(6) "value1"
  ["key3"]=>
  string(6) "value3"
}

    
```

**`Memcached::getMulti()` 的 Memcached v1 和 v2 示例**

```php


<?php
// 仅在扩展版本 v1 和 v2 中有效

$m = new Memcached();
$m->addServer('localhost', 11211);

$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items);
$result = $m->getMulti(array('key1', 'key3', 'badkey'), $cas);
var_dump($result, $cas);
?>

    
```

以上示例的输出类似于：

```text


array(2) {
  ["key1"]=>
  string(6) "value1"
  ["key3"]=>
  string(6) "value3"
}
array(2) {
  ["key1"]=>
  float(2360)
  ["key3"]=>
  float(2362)
}

    
```

**`Memcached::GET_PRESERVE_ORDER` 的 Memcached v3 示例**

```php


<?php
//  v3 扩展有效

$m = new Memcached();
$m->addServer('localhost', 11211);

$data = array(
    'foo' => 'foo-data',
    'bar' => 'bar-data',
    'baz' => 'baz-data',
    'lol' => 'lol-data',
    'kek' => 'kek-data',
);

$m->setMulti($data, 3600);

$keys = array_keys($data);
$keys[] = 'zoo';
$got = $m->getMulti($keys, Memcached::GET_PRESERVE_ORDER);

foreach ($got as $k => $v) {
    echo "$k $v\n";
}
?>

    
```

以上示例的输出类似于：

```text


foo foo-data
bar bar-data
baz baz-data
lol lol-data
kek kek-data
zoo 

    
```

**`Memcached::GET_PRESERVE_ORDER` 的 Memcached v1 和 v2 示例**

```php


<?php
// 在扩展版本 v1 和 v2  中有效

$m = new Memcached();
$m->addServer('localhost', 11211);

$data = array(
    'foo' => 'foo-data',
    'bar' => 'bar-data',
    'baz' => 'baz-data',
    'lol' => 'lol-data',
    'kek' => 'kek-data',
);

$m->setMulti($data, 3600);

$null = null;
$keys = array_keys($data);
$keys[] = 'zoo';
$got = $m->getMulti($keys, $null, Memcached::GET_PRESERVE_ORDER);

foreach ($got as $k => $v) {
    echo "$k $v\n";
}
?>

    
```

以上示例的输出类似于：

```text


foo foo-data
bar bar-data
baz baz-data
lol lol-data
kek kek-data
zoo 

    
```

## 参见

`Memcached::getMultiByKey()` `Memcached::get()` `Memcached::getDelayed()`
