---
id: "zh-php-function-function-mcrypt-get-block-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_get_block_size"
title: "获得加密算法的分组大小"
signature: "int|false mcrypt_get_block_size(int $cipher)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-get-block-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获得加密算法的分组大小

## 说明

```php
int|false mcrypt_get_block_size(int $cipher)
```

```php
int|false mcrypt_get_block_size(string $cipher, string $mode)
```

第一个原型针对 libmcrypt 2.2.x， 第二个原型针对 libmcrypt 2.4.x 或 2.5.x。

`mcrypt_get_block_size()` 用来获取 `$cipher` （其中包括了加密模式） 加密算法分组大小。

`mcrypt_enc_get_block_size()` 函数更加有用， 因为它可以使用 `mcrypt_module_open()` 函数所返回的资源。

## 参数

- **`$cipher`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。
- **`$mode`** — `MCRYPT_MODE_modename` 常量中的一个，或以下字符串中的一个："ecb"，"cbc"，"cfb"，"ofb"，"nofb" 和 "stream"。

## 返回值

返回以字节为单位的此算法的分组数据大小。 或者在失败时返回 `false`。

## 示例

**`mcrypt_get_block_size()` 示例**

在 libmcrypt 2.4.x 和 2.5.x 下 如何使用本函数。

```php


<?php

echo mcrypt_get_block_size('tripledes', 'ecb'); // 8

?>

   
```

## 参见

 `mcrypt_get_key_size()` `mcrypt_enc_get_block_size()` `mcrypt_encrypt()`
