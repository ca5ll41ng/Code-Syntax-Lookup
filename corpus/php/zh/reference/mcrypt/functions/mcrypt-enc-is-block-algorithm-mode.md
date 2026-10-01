---
id: "zh-php-function-function-mcrypt-enc-is-block-algorithm-mode"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_is_block_algorithm_mode"
title: "检测打开的模式是否支持分组加密"
signature: "bool mcrypt_enc_is_block_algorithm_mode(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-is-block-algorithm-mode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测打开的模式是否支持分组加密

## 说明

```php
bool mcrypt_enc_is_block_algorithm_mode(resource $td)
```

打开的模式的算法是否支持分组加密 （例如： 如果是流模式，则返回 `false`， cbc，cfb，ofb 模式则返回 `true`）。

## 参数

- **`$td`** — 加密描述符。

## 返回值

如果算法支持分组模式，返回 `true`， 反之返回 `false`。
