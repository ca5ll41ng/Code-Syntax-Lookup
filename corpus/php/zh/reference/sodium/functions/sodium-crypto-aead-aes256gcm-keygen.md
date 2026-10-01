---
id: "zh-php-function-function-sodium-crypto-aead-aes256gcm-keygen"
language: "php"
lang: "zh"
category: "function"
name: "sodium_crypto_aead_aes256gcm_keygen"
title: "生成随机 AES-256-GCM 密钥"
signature: "string sodium_crypto_aead_aes256gcm_keygen()"
module: "sodium"
source_url: "https://www.php.net/manual/zh/function.sodium-crypto-aead-aes256gcm-keygen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 生成随机 AES-256-GCM 密钥

## 说明

```php
string sodium_crypto_aead_aes256gcm_keygen()
```

生成用于 `sodium_crypto_aead_aes256gcm_encrypt()` 和 `sodium_crypto_aead_aes256gcm_decrypt()` 的随机密钥。

## 参数

此函数没有参数。

## 返回值

返回 256 位随机密钥。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 此函数现在也在 aarch64 上定义。 以前仅在 x86 和 x86_64 上定义。 |
