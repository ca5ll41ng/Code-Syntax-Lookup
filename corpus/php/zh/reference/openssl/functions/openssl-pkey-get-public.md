---
id: "zh-php-function-function-openssl-pkey-get-public"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_get_public"
title: "从证书中解析公钥，以供使用"
signature: "OpenSSLAsymmetricKey|false openssl_pkey_get_public(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-get-public.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从证书中解析公钥，以供使用

## 说明

```php
OpenSSLAsymmetricKey|false openssl_pkey_get_public(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $public_key)
```

`openssl_pkey_get_public()` 从 `$public_key` 中解析公钥，供其他函数使用。

## 参数

- **`$public_key`** — `$public_key` 可以是以下之一： 1. `OpenSSLAsymmetricKey` 实例 2. `file://path/to/file.pem` 格式的字符串。文件名必须包含一个 PEM 编码的证书或者密钥(也许二者都有). 3. 一个 PEM 格式的公钥。

## 返回值

成功时返回 `OpenSSLAsymmetricKey` 实例，错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `OpenSSLAsymmetricKey` 实例；之前返回类型 `OpenSSL key` 的 `resource`。 |
| 8.0.0 | `$public_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
