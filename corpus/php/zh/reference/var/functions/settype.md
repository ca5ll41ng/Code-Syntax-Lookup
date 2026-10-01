---
id: "zh-php-function-function-settype"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sanitizer","params":[1,2]}
name: "settype"
title: "设置变量的类型"
signature: "bool settype(mixed $var, string $type)"
module: "var"
source_url: "https://www.php.net/manual/zh/function.settype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置变量的类型

## 说明

```php
bool settype(mixed $var, string $type)
```

将变量 `$var` 的类型设置成 `$type`。

## 参数

- **`$var`** — 要转换的变量。
- **`$type`** — `$type` 的可能值为： - “boolean”或“bool” - “integer”或“int” - “float”或“double” - "string" - "array" - "object" - “null”

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`settype()` 示例**

```php


<?php
$foo = "5bar"; // string
$bar = true;   // boolean

settype($foo, "integer"); // $foo 现在是 5   (integer)
settype($bar, "string");  // $bar 现在是 "1" (string)

var_dump($foo, $bar);
?>

    
```

## 注释

> “int”的最大值是 `PHP_INT_MAX`。

## 参见

`gettype()` 类型转换 类型戏法
