---
id: "zh-php-function-function-mcrypt-get-key-size"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_get_key_size"
title: "获取指定加密算法的密钥大小"
signature: "int|false mcrypt_get_key_size(int $cipher)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-get-key-size.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取指定加密算法的密钥大小

## 说明

```php
int|false mcrypt_get_key_size(int $cipher)
```

```php
int|false mcrypt_get_key_size(string $cipher, string $mode)
```

第一个原型是针对 libmcrypt 2.2.x 的， 第二个原型是针对 libmcrypt 2.4.x 或 2.5.x 的。

`mcrypt_get_key_size()` 用来获取 由 `$cipher` 所指定的算法和模式所需的密钥长度。

`mcrypt_enc_get_key_size()` 更加有用， 因为它使用由 `mcrypt_module_open()` 返回的资源。

## 参数

- **`$cipher`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。
- **`$mode`** — `MCRYPT_MODE_modename` 常量中的一个，或以下字符串中的一个："ecb"，"cbc"，"cfb"，"ofb"，"nofb" 和 "stream"。

## 返回值

返回算法所支持的最大密钥大小，以字节为单位。 或者在失败时返回 `false`。

## 示例

**`mcrypt_get_key_size()` 示例**

```php


<?php
    echo mcrypt_get_key_size('tripledes', 'ecb');
?>

   
```

在 libmcrypt 2.4.x 或 2.5.x 版本中， 如果使用本函数。

以上示例会输出：

```text


24

   
```

## 参见

 `mcrypt_get_block_size()` `mcrypt_enc_get_key_size()` `mcrypt_encrypt()`
