---
id: "zh-php-function-function-sodium-crypto-aead-aes256gcm-is-available"
language: "php"
lang: "zh"
category: "function"
name: "sodium_crypto_aead_aes256gcm_is_available"
title: "检查硬件是否支持 AES256-GCM"
signature: "bool sodium_crypto_aead_aes256gcm_is_available()"
module: "sodium"
source_url: "https://www.php.net/manual/zh/function.sodium-crypto-aead-aes256gcm-is-available.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查硬件是否支持 AES256-GCM

## 说明

```php
bool sodium_crypto_aead_aes256gcm_is_available()
```

此函数的返回值取决于硬件是否支持硬件加速 AES。

## 参数

此函数没有参数。

## 返回值

如果可以安全地使用 AES-256-GCM 加密，则返回 `true`，否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 现在，此函数在具有 ARM 加密扩展的 aarch64 CPU 上可能返回 `true`。 以前，仅在 x86 和 x86_64 上检测硬件加速的 AES-256-GCM， 此函数在 aarch64 上始终返回 `false`。 |
