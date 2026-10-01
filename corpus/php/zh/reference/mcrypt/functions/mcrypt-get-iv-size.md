---
id: "zh-php-function-function-mcrypt-get-iv-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_get_iv_size"
title: "返回指定算法/模式组合的初始向量大小"
signature: "int mcrypt_get_iv_size(string $cipher, string $mode)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-get-iv-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回指定算法/模式组合的初始向量大小

## 说明

```php
int mcrypt_get_iv_size(string $cipher, string $mode)
```

获取由 `$cipher`/`$mode` 参数指定的初始向量大小。

`mcrypt_enc_get_iv_size()` 更加有用， 因为它使用由 `mcrypt_module_open()` 返回的资源作为参数。

## 参数

- **`$cipher`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。
- **`$mode`** — `MCRYPT_MODE_modename` 常量中的一个，或以下字符串中的一个："ecb"，"cbc"，"cfb"，"ofb"，"nofb" 和 "stream"。 — 由于 ECB 模式不使用初始向量，所以会忽略它。 在加密和解密的过程中， 你需要使用相同的初始向量（想象成：开始点）。

## 返回值

返回初始向量的大小，以字节为单位。 如果发生错误，返回 `false`。 如果指定的算法/模式不需要初始向量，返回 0。

## 示例

**`mcrypt_get_iv_size()` 示例**

```php


<?php
    echo mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB) . "\n";

    echo mcrypt_get_iv_size('des', 'ecb') . "\n";
?>

   
```

## 参见

 `mcrypt_get_block_size()` `mcrypt_enc_get_iv_size()` `mcrypt_create_iv()`
