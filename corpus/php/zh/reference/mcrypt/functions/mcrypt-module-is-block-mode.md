---
id: "zh-php-function-function-mcrypt-module-is-block-mode"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_module_is_block_mode"
title: "检测指定模式是否以分组方式输出"
signature: "bool mcrypt_module_is_block_mode(string $mode, [string $lib_dir = ...])"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-module-is-block-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测指定模式是否以分组方式输出

## 说明

```php
bool mcrypt_module_is_block_mode(string $mode, [string $lib_dir = ...])
```

如果模式是以字节块（分组）方式输出，则返回 `true`， 如果只是以字节方式输出，则返回 `false`。 （例如，对于 cbc 和 ecb 模式，返回 `true`，对于 cfb 和 stream 模式，返回 `false`）

## 参数

- **`$mode`** — `MCRYPT_MODE_modename` 常量中的一个，或以下字符串中的一个："ecb"，"cbc"，"cfb"，"ofb"，"nofb" 和 "stream"。
- **`$lib_dir`** — 可选参数 `$lib_dir` ， 表示在操作系统上包含模式模块的路径。

## 返回值

如果模式是以字节块（分组）方式输出，则返回 `true`， 如果只是以字节方式输出，则返回 `false`。 （例如，对于 cbc 和 ecb 模式，返回 `true`，对于 cfb 和 stream 模式，返回 `false`）
