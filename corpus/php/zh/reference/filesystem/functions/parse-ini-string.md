---
id: "zh-php-function-function-parse-ini-string"
language: "php"
lang: "zh"
category: "function"
name: "parse_ini_string"
title: "解析配置字符串"
signature: "array|false parse_ini_string(string $ini_string, bool $process_sections = false, int $scanner_mode = INI_SCANNER_NORMAL)"
module: "filesystem"
source_url: "https://www.php.net/manual/zh/function.parse-ini-string.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析配置字符串

## 说明

```php
array|false parse_ini_string(string $ini_string, bool $process_sections = false, int $scanner_mode = INI_SCANNER_NORMAL)
```

`parse_ini_string()` 返回 `$ini_string` 字符串解析后的关联数组。

ini 字符串的格式参考 php.ini

> 此函数不得用于不可信的输入，除非 `$scanner_mode` 设置为 `INI_SCANNER_RAW`，因为解析后的输出可能包含敏感常量的值，例如存储数据库密码的常量。

## 参数

- **`$ini_string`** — ini 字符串内容。
- **`$process_sections`** — 设置 `$process_sections` 参数为 `true`，得到一个多维数组，包含名称和设置。`$process_sections` 默认为 `false`。
- **`$scanner_mode`** — 可以是 `INI_SCANNER_NORMAL` (默认)或 `INI_SCANNER_RAW`。如果是 `INI_SCANNER_RAW`，那么选项值不会被解析。 — As of PHP 5.6.1 can also be specified as `INI_SCANNER_TYPED`. In this mode boolean, null and integer types are preserved when possible. String values `"true"`, `"on"` and `"yes"` are converted to `true`. `"false"`, `"off"`, `"no"` and `"none"` are considered `false`. `"null"` is converted to `null` in typed mode. Also, all numeric strings are converted to integer type if it is possible.

## 返回值

执行成功返回一个关联数组，返回 `false` 为失败。

## 注释

> 有些保留字不能作为 ini 文件中的键名，包括：`null`、`yes`、`no`、`true`、`false`、`on`、`off`、`none`。除非使用 `INI_SCANNER_TYPED` 模式，否则 `null`、`off`、`no` 和 `false` 的值等效于 `""`，`on`、`yes` 和 `true` 的值等效于 `"1"`。字符 `?{}|&~![()^"` 也不能用在键名的任何地方，而且这些字符在选项值中有着特殊的意义。

## 参见

`parse_ini_file()`
