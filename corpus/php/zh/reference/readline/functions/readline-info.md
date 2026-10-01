---
id: "zh-php-function-function-readline-info"
language: "php"
lang: "zh"
category: "function"
name: "readline_info"
title: "获取/设置各种 readline 内部变量"
signature: "mixed readline_info(string|null $var_name = null, int|string|bool|null $value = null)"
module: "readline"
source_url: "https://www.php.net/manual/zh/function.readline-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取/设置各种 readline 内部变量

## 说明

```php
mixed readline_info(string|null $var_name = null, int|string|bool|null $value = null)
```

获取/设置各种 readline 内部变量。

## 参数

- **`$var_name`** — 变量名。
- **`$value`** — 如果提供，将是设置的新值。

## 返回值

如果调用时没有参数，此函数将返回 readline 使用的所有设置的值组成的数组。元素将按照以下值进行索引 `done`、`end`、`erase_empty_line`、`library_version`、`line_buffer`、`mark`、`pending_input`、`point`、`prompt`、`readline_name`、和 `terminal_name`。 `array` 仅包含库用于编译 readline 扩展支持的元素。

如果使用一个或两个参数调用，则返回原来的值。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$var_name` 和 `$value` 现在可为 null。 |
