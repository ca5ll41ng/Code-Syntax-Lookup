---
id: "zh-php-function-function-openssl-pkey-get-private"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_get_private"
title: "获取私钥"
signature: "OpenSSLAsymmetricKey|false openssl_pkey_get_private(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string|null $passphrase = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-get-private.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取私钥

## 说明

```php
OpenSSLAsymmetricKey|false openssl_pkey_get_private(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string|null $passphrase = null)
```

`openssl_pkey_get_private()` 解析 `$private_key` 供其他函数使用。

## 参数

- **`$private_key`** — `$private_key` 可以是如下密钥之一： 1. 如下格式的字符串 `file://path/to/file.pem`。该文件必须包含 PEM 编码的证书或者私钥 (可能都包含了). 2. 一个 PEM 格式的私钥。
- **`$passphrase`** — 如果指定的密钥已被加密了(受密码保护)，可选参数 `$passphrase` 是必须要的。

## 返回值

成功时现在返回 `OpenSSLAsymmetricKey` 实例，失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `OpenSSLAsymmetricKey` 实例；之前返回类型 `OpenSSL key` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
| 8.0.0 | `$passphrase` 现在可为 null。 |
