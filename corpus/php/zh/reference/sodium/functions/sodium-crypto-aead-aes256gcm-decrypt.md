---
id: "zh-php-function-function-sodium-crypto-aead-aes256gcm-decrypt"
language: "php"
lang: "zh"
category: "function"
name: "sodium_crypto_aead_aes256gcm_decrypt"
title: "使用 AES-256-GCM 验证并解密消息"
signature: "string|false sodium_crypto_aead_aes256gcm_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)"
module: "sodium"
source_url: "https://www.php.net/manual/zh/function.sodium-crypto-aead-aes256gcm-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 使用 AES-256-GCM 验证并解密消息

## 说明

```php
string|false sodium_crypto_aead_aes256gcm_decrypt(string $ciphertext, string $additional_data, string $nonce, string $key)
```

使用 AES-256-GCM 先验证再解密。 仅当 `sodium_crypto_aead_aes256gcm_is_available()` 返回 `true` 时可用。

## 参数

- **`$ciphertext`** — 必须采用 `sodium_crypto_aead_aes256gcm_encrypt()` 提供的格式（密文和标签串联）。
- **`$additional_data`** — 经过认证的附加数据。它用于验证追加到密文的认证标签， 但不会被加密，也不会存储在密文中。
- **`$nonce`** — 每条消息只能使用一次的数字，长度为 12 字节。
- **`$key`** — 加密密钥（256 位）。

## 返回值

成功时返回明文， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 此函数现在也在 aarch64 上定义。 以前仅在 x86 和 x86_64 上定义。 |
