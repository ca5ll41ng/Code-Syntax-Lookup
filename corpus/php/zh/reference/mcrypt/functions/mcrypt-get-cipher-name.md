---
id: "zh-php-function-function-mcrypt-get-cipher-name"
language: "php"
lang: "zh"
category: "function"
name: "mcrypt_get_cipher_name"
title: "获取加密算法名称"
signature: "string mcrypt_get_cipher_name(int $cipher)"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/function.mcrypt-get-cipher-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取加密算法名称

## 说明

```php
string mcrypt_get_cipher_name(int $cipher)
```

```php
string mcrypt_get_cipher_name(string $cipher)
```

`mcrypt_get_cipher_name()` 用来获取加密算法名称。

libmcrypt 2.2.x 中，`mcrypt_get_cipher_name()` 接受整数表达的加密算法， libmcrypt 2.4.x 及更高版本中，它接受字符串表达的加密算法名称， 返回的都是字符串表达的名称，如果算法不存在则返回 `false`。

## 参数

- **`$cipher`** — `MCRYPT_ciphername` 常量中的一个，或者是字符串值的算法名称。

## 返回值

本函数返回加密算法名称， 如果算法不存在返回 `false`。

## 示例

**`mcrypt_get_cipher_name()` 示例**

```php


<?php
   $cipher = MCRYPT_TripleDES;

   echo mcrypt_get_cipher_name($cipher);
?>

   
```

以上示例会输出：

```text


3DES

   
```
