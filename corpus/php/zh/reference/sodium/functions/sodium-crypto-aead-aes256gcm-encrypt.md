---
id: "zh-php-function-function-sodium-crypto-aead-aes256gcm-encrypt"
language: "php"
lang: "zh"
category: "function"
name: "sodium_crypto_aead_aes256gcm_encrypt"
title: "使用 AES-256-GCM 加密并认证"
signature: "string sodium_crypto_aead_aes256gcm_encrypt(string $message, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/zh/function.sodium-crypto-aead-aes256gcm-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 AES-256-GCM 加密并认证

## 说明

```php
string sodium_crypto_aead_aes256gcm_encrypt(string $message, string $additional_data, string $nonce, string $key)
```

使用 AES-256-GCM 先加密再认证。 仅当 `sodium_crypto_aead_aes256gcm_is_available()` 返回 `true` 时可用。

## 参数

- **`$message`** — 要加密的明文消息。
- **`$additional_data`** — 经过认证的附加数据。它用于验证追加到密文的认证标签， 但不会被加密，也不会存储在密文中。
- **`$nonce`** — 每条消息只能使用一次的数字，长度为 12 字节。
- **`$key`** — 加密密钥（256 位）。

## 返回值

以原始二进制字节字符串返回密文和认证标签（格式：先是密文，然后是标签）。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 此函数现在也在 aarch64 上定义。 以前仅在 x86 和 x86_64 上定义。 |
