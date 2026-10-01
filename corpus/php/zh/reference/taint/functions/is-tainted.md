---
id: "zh-php-function-function-is-tainted"
language: "php"
lang: "zh"
category: "function"
name: "is_tainted"
title: "检查一个字符串是否被污染"
signature: "bool is_tainted(string $string)"
module: "taint"
source_url: "https://www.php.net/manual/zh/function.is-tainted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查一个字符串是否被污染

## 说明

```php
bool is_tainted(string $string)
```

检查给定的值是否携带污点标记。只有字符串可能被污染， 其他任何类型都返回 `false`。

## 参数

- **`$string`** — 待检查的值。

## 返回值

如果该值是被污染的字符串，返回 `true`，否则返回 `false`。 当 taint.enable 未开启时， 始终返回 `false`。

## 示例

**`is_tainted()` 示例**

```php


<?php
$name = $_GET['name'] ?? 'world';
var_dump(is_tainted($name));
?>

   
```

以上示例的输出类似于：

```text


bool(true)

   
```

## 参见

`taint()` `untaint()`
