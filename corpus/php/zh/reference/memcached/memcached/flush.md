---
id: "zh-php-function-memcached-flush"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::flush"
title: "作废缓存中的所有元素"
signature: "public bool Memcached::flush(int $delay = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.flush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 作废缓存中的所有元素

## 说明

```php
public bool Memcached::flush(int $delay = 0)
```

`Memcached::flush()` 立即（默认）或者在 `$delay` 延迟后作废所有缓存中已经存在的元素。 在作废之后检索命令将不会有任何返回（除非在执行 `Memcached::flush()` 作废之后，该 key 下被重新存储过）。flush 不会真正的释放已有元素的内存，而是逐渐的存入新元素重用那些内存。

## 参数

- **`$delay`** — 在作废所有元素之前等待的时间（单位秒）。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::flush()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

/* 10 秒内清除所有元素 */
$m->flush(10);
?>

    
```
