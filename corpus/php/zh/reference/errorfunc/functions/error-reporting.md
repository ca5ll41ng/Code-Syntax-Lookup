---
id: "zh-php-function-function-error-reporting"
language: "php"
lang: "zh"
category: "function"
name: "error_reporting"
title: "设置应该报告何种 PHP 错误"
signature: "int error_reporting(int|null $error_level = null)"
module: "errorfunc"
source_url: "https://www.php.net/manual/zh/function.error-reporting.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 设置应该报告何种 PHP 错误

## 说明

```php
int error_reporting(int|null $error_level = null)
```

`error_reporting()` 函数能够在运行时设置 error_reporting 指令。 PHP 有诸多错误级别，使用该函数可以设置在脚本运行时的级别。 如果没有设置可选参数 `$error_level`， `error_reporting()` 仅会返回当前的错误报告级别。

## 参数

- **`$error_level`** — 新的 error_reporting 级别。 可以是一个位掩码也可以是一个已命名的常量。 强烈建议使用已命名的常量，以确保兼容将来的版本。 由于错误级别的添加、整数取值范围的增加， 较久的基于整数的错误级别不会总是和预期的表现一致。 — 可用的错误级别常量及其实际含义描述在了 predefined constants 中。

## 返回值

在更改为 `$error_level` *之前*返回 error_reporting 级别。

> 错误控制 `@` 运算符在错误处理期间会更改错误级别。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$error_level` 现在可以为空。 |

## 示例

**`error_reporting()` 范例**

```php


<?php

// 关闭所有PHP错误报告
error_reporting(0);

// Report simple running errors
error_reporting(E_ERROR | E_WARNING | E_PARSE);

// 报告 E_NOTICE也挺好 (报告未初始化的变量
// 或者捕获变量名的错误拼写)
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);

// 除了 E_NOTICE，报告其他所有错误
error_reporting(E_ALL ^ E_NOTICE);

// 报告所有 PHP 错误
error_reporting(E_ALL);

// 报告所有 PHP 错误
error_reporting(-1);

// 和 error_reporting(E_ALL); 一样
ini_set('error_reporting', E_ALL);

?>

    
```

## 注释

> 传入 `-1` 的值将尽可能显示所有错误，甚至包括将来 PHP 可能加入的新的错误级别和常量。常量 `E_ALL` 有同样的行为。

## 参见

display_errors 指令 html_errors 指令 xmlrpc_errors 指令 错误控制运算符 `ini_set()`
