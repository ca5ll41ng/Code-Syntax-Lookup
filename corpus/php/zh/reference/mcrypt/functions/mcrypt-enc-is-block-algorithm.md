---
id: "zh-php-function-function-mcrypt-enc-is-block-algorithm"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_is_block_algorithm"
title: "检测打开模式的算法是否为分组算法"
signature: "bool mcrypt_enc_is_block_algorithm(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-is-block-algorithm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检测打开模式的算法是否为分组算法

## 说明

```php
bool mcrypt_enc_is_block_algorithm(resource $td)
```

打开模式的算法是否为分组算法。

## 参数

- **`$td`** — 加密描述符。

## 返回值

如果是分组算法，返回 `true`， 如果是流模式，返回 `false`。
