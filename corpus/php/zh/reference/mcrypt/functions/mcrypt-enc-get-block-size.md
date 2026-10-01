---
id: "zh-php-function-function-mcrypt-enc-get-block-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_enc_get_block_size"
title: "返回打开的算法的分组大小"
signature: "int mcrypt_enc_get_block_size(resource $td)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-enc-get-block-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回打开的算法的分组大小

## 说明

```php
int mcrypt_enc_get_block_size(resource $td)
```

获取打开的算法的分组大小。

## 参数

- **`$td`** — 加密描述符。

## 返回值

返回指定算法的分组大小，以字节为单位。
