---
id: "zh-php-function-yac-setter"
language: "php"
lang: "zh"
category: "function"
name: "Yac::__set"
title: "以属性语法存储一个值"
signature: "public mixed Yac::__set(string $key, mixed $value)"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.setter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以属性语法存储一个值

## 说明

```php
public mixed Yac::__set(string $key, mixed $value)
```

向缓存中存储一个值，写入 `Yac` 实例的属性时被调用： `$yac->foo = "bar"` 等价于 `$yac->set("foo", "bar")`，且不带 ttl。

## 参数

- **`$key`** — 属性名，被用作缓存键。
- **`$value`** — 要存储的值。除 `resource` 外的所有 PHP 类型都可以存储。

## 返回值

返回存储的值。

## 示例

**`Yac::__set()` 示例**

```php


<?php
$yac = new Yac();

$yac->foo = "bar";          // 存储时不带 ttl
var_dump($yac->get("foo")); // string(3) "bar"
?>

   
```

## 参见

`Yac::set()` `Yac::__get()`
