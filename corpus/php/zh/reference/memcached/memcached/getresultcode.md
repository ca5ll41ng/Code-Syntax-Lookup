---
id: "zh-php-function-memcached-getresultcode"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getResultCode"
title: "返回最后一次操作的结果代码"
signature: "public int Memcached::getResultCode()"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getresultcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回最后一次操作的结果代码

## 说明

```php
public int Memcached::getResultCode()
```

`Memcached::getResultCode()` 返回 `Memcached::RES_{*}` 系列常量中的一个来表明最后一次执行 Memcached 方法的结果。

## 参数

此函数没有参数。

## 返回值

最后一次 Memcached 操作的结果代码。

## 示例

**`Memcached::getResultCode()` 示例**

```php


<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->add('foo', 'bar');
if ($m->getResultCode() == Memcached::RES_NOTSTORED) {
    /* ... */
}
?>

    
```
