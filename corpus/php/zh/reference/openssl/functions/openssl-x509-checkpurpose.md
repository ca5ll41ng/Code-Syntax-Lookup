---
id: "zh-php-function-function-openssl-x509-checkpurpose"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_checkpurpose"
title: "验证是否可以为特定目的使用证书"
signature: "bool|int openssl_x509_checkpurpose(OpenSSLCertificate|string $certificate, int $purpose, array $ca_info = [], string|null $untrusted_certificates_file = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-checkpurpose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 验证是否可以为特定目的使用证书

## 说明

```php
bool|int openssl_x509_checkpurpose(OpenSSLCertificate|string $certificate, int $purpose, array $ca_info = [], string|null $untrusted_certificates_file = null)
```

`openssl_x509_checkpurpose()` 检查证书以查看它是否可用于指定目的 `$purpose`。

## 参数

- **`$certificate`** — 被检查的证书。
- **`$purpose`** — | 常量名 | 描述 | | --- | --- | | X509_PURPOSE_SSL_CLIENT | 证书是否可以用于 SSL 连接的客户端? | | X509_PURPOSE_SSL_SERVER | 证书是否可以用于 SSL 连接的服务器端? | | X509_PURPOSE_NS_SSL_SERVER | 证书是否可以用于 Netscape SSL 服务器? | | X509_PURPOSE_SMIME_SIGN | 证书是否可以用来签名 S/MIME 邮件? | | X509_PURPOSE_SMIME_ENCRYPT | 正式是否可用用来加密 S/MIME 邮件? | | X509_PURPOSE_CRL_SIGN | 证书是否可以用来签名证书撤销列表（CRL）? | | X509_PURPOSE_ANY | 证书是否可以用于任何目的? | 这些选项不是位字段——只能指定一个字段!
- **`$ca_info`** — `$ca_info` 应该是一个受信任的 CA 文件/文件夹组成的数组，如 Certificate Verification 所描述的一样。
- **`$untrusted_certificates_file`** — 如果指定，这应该是 PEM 编码文件的名称，该文件持有证书，可以用来帮助验证证书,尽管从该文件中获得的证书不受信任。

## 返回值

如果证书可以用于预期目的，返回 `true`，如果不行，则返回 `false` 错误便会返回 -1。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
| 8.0.0 | `$untrusted_certificates_file` 现在可为 null。 |
