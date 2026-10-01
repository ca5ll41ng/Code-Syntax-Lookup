---
id: "zh-php-function-memcached-setmulti"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::setMulti"
title: "存储多个元素"
signature: "public bool Memcached::setMulti(array $items, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.setmulti.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 存储多个元素

## 说明

```php
public bool Memcached::setMulti(array $items, int $expiration = 0)
```

`Memcached::setMulti()` 类似于 `Memcached::set()`，但是使用了 参数 `$items` 指定多个元素来替代单独的 key/value 设置以便于对多个元素的操作。`$expiration` 参数指定的时候一次应用到所有的元素上。

## 参数

- **`$items`** — 存放在服务器上的键／值对数组。
- **`$expiration`** — 到期时间，默认为 0。 更多信息请参见到期时间。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::setMulti()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items, time() + 300);
?>

    
```

## 参见

`Memcached::setMultiByKey()` `Memcached::set()`
