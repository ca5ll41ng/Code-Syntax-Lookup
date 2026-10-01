---
id: "zh-php-function-memcached-getdelayed"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getDelayed"
title: "请求多个元素"
signature: "public bool Memcached::getDelayed(array $keys, bool $with_cas = false, callable|null $value_cb = null)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getdelayed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 请求多个元素

## 说明

```php
public bool Memcached::getDelayed(array $keys, bool $with_cas = false, callable|null $value_cb = null)
```

`Memcached::getDelayed()` 向 Memcached 服务端发出一个检索 `$keys` 指定的多个 key 对应元素的请求。这个方法不会等待响应而是立即返回。当你需要收集元素值时，调用 `Memcached::fetch()` 或 `Memcached::fetchAll()`。如果 `$with_cas` 设置为 true，会同时请求每个元素的 CAS 标记。

可以通过参数 `$value_cb` 指定一个 result callback 来替代明确的抓取结果（fetch 或 fetchAll 为明确抓取方式）。

## 参数

- **`$keys`** — 要请求的 key 的数组。
- **`$with_cas`** — 是否同时请求 CAS 标记。
- **`$value_cb`** — 结果回调函数或 `null`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::getDelayed()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));

$m->getDelayed(array('int', 'array'), true);
var_dump($m->fetchAll());
?>

    
```

以上示例会输出：

```text


array(2) {
  [0]=>
  array(3) {
    ["key"]=>
    string(3) "int"
    ["value"]=>
    int(99)
    ["cas"]=>
    float(2363)
  }
  [1]=>
  array(3) {
    ["key"]=>
    string(5) "array"
    ["value"]=>
    array(2) {
      [0]=>
      int(11)
      [1]=>
      int(12)
    }
    ["cas"]=>
    float(2365)
  }
}

    
```

## 参见

`Memcached::getDelayedByKey()` `Memcached::fetch()` `Memcached::fetchAll()`
