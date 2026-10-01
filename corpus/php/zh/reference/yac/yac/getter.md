---
id: "zh-php-function-yac-getter"
language: "php"
lang: "zh"
category: "function"
name: "Yac::__get"
title: "以属性语法取值"
signature: "public mixed Yac::__get(string $key)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.getter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以属性语法取值

## 说明

```php
public mixed Yac::__get(string $key)
```

从缓存中取值，读取 `Yac` 实例的属性时被调用： `$yac->foo` 等价于 `$yac->get("foo")`。

## 参数

- **`$key`** — 属性名，被用作缓存键。

## 返回值

命中时返回缓存的值；键不在缓存中时返回 `null`。

> 与 `Yac::get()` 不同， 属性语法无法区分存储的 `null` 和键不存在，并且只支持单键操作。

## 示例

**`Yac::__get()` 示例**

```php


<?php
$yac = new Yac();
$yac->set("foo", "bar");

var_dump($yac->foo);       // string(3) "bar"
var_dump($yac->missing);   // NULL
?>

   
```

## 参见

`Yac::get()` `Yac::__set()`
