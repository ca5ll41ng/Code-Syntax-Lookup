---
id: "zh-php-function-function-openssl-pbkdf2"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pbkdf2"
title: "生成 PKCS5 v2 PBKDF2 字符串"
signature: "string|false openssl_pbkdf2(string $password, string $salt, int $key_length, int $iterations, string $digest_algo = \"sha1\")"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pbkdf2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成 PKCS5 v2 PBKDF2 字符串

## 说明

```php
string|false openssl_pbkdf2(string $password, string $salt, int $key_length, int $iterations, string $digest_algo = "sha1")
```

`openssl_pbkdf2()` 计算 PBKDF2 (Password-Based Key Derivation Function 2)，在 PKCS5 v2 中定义的密钥的推导函数。

## 参数

- **`$password`** — 派生密钥所生成的密码。
- **`$salt`** — PBKDF2 推荐不少于 128 位（16 字节）的密码盐值。
- **`$key_length`** — 希望输出密钥的长度。
- **`$iterations`** — 需要的迭代次数。[NIST 建议至少 10,000 次](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf)。自 2023 年起，OWASP 针对 PBKDF2-HMAC-SHA256 推荐 600,000 次迭代，针对 PBKDF2-HMAC-SHA512 推荐 210,000 次。
- **`$digest_algo`** — 在 `openssl_get_md_methods()` 中可选的散列或摘要算法。默认是 SHA-1。推荐设置为 SHA-256 或 SHA-512。

## 返回值

成功，返回原始二进制字符串 或者在失败时返回 `false`。

## 示例

**openssl_pbkdf2() 示例**

```php


<?php
$password = 'password';
$salt = openssl_random_pseudo_bytes(16);
$keyLength = 20;
$iterations = 600000;
$generated_key = openssl_pbkdf2($password, $salt, $keyLength, $iterations, 'sha256');
echo bin2hex($generated_key)."\n";
echo base64_encode($generated_key)."\n";
?>

    
```

## 参见

`hash_pbkdf2()` `openssl_get_md_methods()`
