---
id: "zh-php-function-function-mcrypt-enc-is-block-mode"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_is_block_mode"
title: "检测打开的模式是否以分组方式输出"
signature: "bool mcrypt_enc_is_block_mode(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-is-block-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测打开的模式是否以分组方式输出

## 说明

```php
bool mcrypt_enc_is_block_mode(resource $td)
```

打开的模式是否以分组方式输出 （例如，对于 cbc 和 ecb 模式而言返回 `true`，对于 cfb 和流模式而言，返回 `false`）。

## 参数

- **`$td`** — 加密描述符。

## 返回值

如果模式以字节分组（字节块）方式输出，返回 `true`， 如果是以字节方式输出，返回 `false`。
