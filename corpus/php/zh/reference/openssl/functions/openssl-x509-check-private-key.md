---
id: "zh-php-function-function-openssl-x509-check-private-key"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_check_private_key"
title: "检查私钥是否对应于证书"
signature: "bool openssl_x509_check_private_key(OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-check-private-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查私钥是否对应于证书

## 说明

```php
bool openssl_x509_check_private_key(OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key)
```

检查指定的私钥 `$private_key` 是否和证书 `$certificate` 对应。

> 这个函数不会检查密钥 `$private_key` 是否真的是私钥。 它只是比较了和密钥匹配的公共材料 (比如，RSA 密钥的指数和模量) 和/或密钥参数(比如，EC 密钥的参数)。
>
> 这也意味着，比如，提供给 `$private_key` 赋一个公钥值，该函数可能返回 `true`。

## 参数

- **`$certificate`** — 证书。
- **`$private_key`** — 私钥。

## 返回值

如果指定的私钥 `$private_key` 和证书 `$certificate` 对应，返回 `true` 否则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
