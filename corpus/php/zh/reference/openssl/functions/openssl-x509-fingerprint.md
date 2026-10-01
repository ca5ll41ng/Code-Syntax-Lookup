---
id: "zh-php-function-function-openssl-x509-fingerprint"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_fingerprint"
title: "计算一个给定的 x.509 证书的指纹或摘要"
signature: "string|false openssl_x509_fingerprint(OpenSSLCertificate|string $certificate, string $digest_algo = \"sha1\", bool $binary = false)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-fingerprint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 计算一个给定的 x.509 证书的指纹或摘要

## 说明

```php
string|false openssl_x509_fingerprint(OpenSSLCertificate|string $certificate, string $digest_algo = "sha1", bool $binary = false)
```

`openssl_x509_fingerprint()` 返回 `$certificate` 的字符串类型的摘要。

## 参数

- **`$certificate`** — 参见密钥／证书参数以获取有效值列表。
- **`$digest_algo`** — 使用的摘要方法或散列算法，比如，"sha256"、`openssl_get_md_methods()` 摘要算法之一。
- **`$binary`** — 设置为 `true` 时，输出原始二进制数据。设置为 `false` 时，输出小写的 16 进制字符串。

## 返回值

将包含计算的证书指纹的字符串返回为小写 16 进制格式，除非将 `$binary` 设置为 `true`，在这种情况下会返回消息摘要的原始二进制表示形式。

失败则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
