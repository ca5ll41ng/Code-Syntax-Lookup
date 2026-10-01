---
id: "zh-php-function-mysqli-stmt-init"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::stmt_init"
aliases: ["mysqli_stmt_init"]
title: "初始化语句并返回用于 mysqli_stmt_prepare（调用）的对象"
signature: "public mysqli_stmt|false mysqli::stmt_init()"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.stmt-init.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 初始化语句并返回用于 mysqli_stmt_prepare（调用）的对象

## 说明

面向对象风格

```php
public mysqli_stmt|false mysqli::stmt_init()
```

过程化风格

```php
mysqli_stmt|false mysqli_stmt_init(mysqli $mysql)
```

分配并初始化适合 `mysqli_stmt_prepare()` 的语句对象。

> 在调用 `mysqli_stmt_prepare()` 之前，对其它 mysqli_stmt 函数的后续调用都会失败。

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。

## 返回值

返回对象。

## 参见

`mysqli_stmt_prepare()`
