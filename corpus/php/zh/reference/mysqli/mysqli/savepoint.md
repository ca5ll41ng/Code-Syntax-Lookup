---
id: "zh-php-function-mysqli-savepoint"
language: "php"
lang: "zh"
category: "function"
name: "mysqli::savepoint"
aliases: ["mysqli_savepoint"]
title: "在当前事务中设置命名保存点"
signature: "public bool mysqli::savepoint(string $name)"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/mysqli.savepoint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 在当前事务中设置命名保存点

## 说明

面向对象风格

```php
public bool mysqli::savepoint(string $name)
```

过程化风格:

```php
bool mysqli_savepoint(mysqli $mysql, string $name)
```

此函数等同于执行 $mysqli->query("SAVEPOINT `$name`");

## 参数

- **`$mysql`** — 仅以过程化样式：由 `mysqli_connect()` 或 `mysqli_init()` 返回的 `mysqli` 对象。
- **`$name`** — 保存点的标识符。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 参见

`mysqli_release_savepoint()`
