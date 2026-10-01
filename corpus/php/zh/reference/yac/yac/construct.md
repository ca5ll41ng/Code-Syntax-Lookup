---
id: "zh-php-function-yac-construct"
language: "php"
lang: "zh"
category: "function"
name: "Yac::__construct"
title: "构造函数"
signature: "public Yac::__construct(string $prefix = \"\")"
module: "yac"
source_url: "https://www.php.net/manual/zh/yac.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 构造函数

## 说明

```php
public Yac::__construct(string $prefix = "")
```

创建一个新的 `Yac` 实例。 可选的 `$prefix` 会被添加到该实例存储的每个键前面， 这样同一台机器上的多个应用或缓存就可以使用重叠的键名而互不冲突。

## 参数

- **`$prefix`** — 键前缀，最长 48 字节（`YAC_MAX_KEY_LEN`）。

## 错误／异常

当缓存被禁用（`yac.enable=0`） 或 `$prefix` 超过 48 字节时， 会抛出 Exception。

## 示例

**`Yac::__construct()` 示例**

```php


<?php
$yac = new Yac();
$yac->set("foo", "bar");

$other = new Yac("app2_");
var_dump($other->get("foo"));    // bool(false)：不同的命名空间
$other->set("foo", "baz");       // 实际存储的键是 "app2_foo"
?>

   
```

## 参见

`Yac::set()` `Yac::get()`
