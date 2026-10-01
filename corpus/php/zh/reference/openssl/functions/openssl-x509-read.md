---
id: "zh-php-function-function-openssl-x509-read"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_read"
title: "解析 x.509 证书并返回对象"
signature: "OpenSSLCertificate|false openssl_x509_read(OpenSSLCertificate|string $certificate)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-read.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 x.509 证书并返回对象

## 说明

```php
OpenSSLCertificate|false openssl_x509_read(OpenSSLCertificate|string $certificate)
```

`openssl_x509_read()` 解析`$certificate` 提供的证书，并返回它的 `OpenSSLCertificate` 对象。

## 参数

- **`$certificate`** — X509 证书。参见 Key/Certificate parameters 获取可用的值。

## 返回值

成功时返回 `OpenSSLCertificate`， 或者在失败时返回 `false`.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 此函数现在成功时返回 `OpenSSLCertificate` 实例；之前返回类型 `OpenSSL X.509` 的 `resource`。 |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
