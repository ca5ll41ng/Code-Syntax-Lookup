---
id: "zh-php-function-memcached-delete"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::delete"
title: "删除元素"
signature: "public bool Memcached::delete(string $key, int $time = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 删除元素

## 说明

```php
public bool Memcached::delete(string $key, int $time = 0)
```

从服务器上删除 `$key`。

## 参数

- **`$key`** — 要删除的 key。
- **`$time`** — 服务端等待删除该元素的总时间。
  > As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero `$time` will cause the deletion to fail. `Memcached::getResultCode()` will return `MEMCACHED_INVALID_ARGUMENTS`.



## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如果 key 不存在, `Memcached::getResultCode()` 将会返回 `Memcached::RES_NOTFOUND`。

## 示例

**`Memcached::delete()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->delete('key1');
?>

    
```

## 参见

`Memcached::deleteByKey()` `Memcached::deleteMulti()`
