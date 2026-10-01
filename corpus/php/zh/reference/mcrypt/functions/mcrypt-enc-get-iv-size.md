---
id: "zh-php-function-function-mcrypt-enc-get-iv-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_get_iv_size"
title: "返回打开的算法的初始向量大小"
signature: "int mcrypt_enc_get_iv_size(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-get-iv-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回打开的算法的初始向量大小

## 说明

```php
int mcrypt_enc_get_iv_size(resource $td)
```

本函数返回由加密描述符指定的算法所使用的初始向量大小， 以字节为单位。 在 cbc，cfb 和 ofb 模式以及某些流模式算法中会用到初始向量。

## 参数

- **`$td`** — 加密描述符。

## 返回值

返回初始向量大小。如果算法忽略初始向量，则返回 0。
