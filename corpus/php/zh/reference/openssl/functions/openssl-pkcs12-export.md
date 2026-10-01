---
id: "zh-php-function-function-openssl-pkcs12-export"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs12_export"
title: "将 PKCS#12 兼容证书存储文件导出到变量"
signature: "bool openssl_pkcs12_export(OpenSSLCertificate|string $certificate, string $output, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string $passphrase, array $options = [])"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs12-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 PKCS#12 兼容证书存储文件导出到变量

## 说明

```php
bool openssl_pkcs12_export(OpenSSLCertificate|string $certificate, string $output, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string $passphrase, array $options = [])
```

`openssl_pkcs12_export()` 以 PKCS#12 文件格式将 `$certificate` 导入到名为 `$output` 的字符串变量中。

## 参数

- **`$certificate`** — 参见密钥／证书参数以获取有效值列表。
- **`$output`** — 成功，该字符串将为 PKCS#12 格式。
- **`$private_key`** — PKCS#12 文件的私钥部分file， 参见 公/私钥参数 获取更多可用列表。
- **`$passphrase`** — 用来解锁 PKCS#12 文件的解密密码。
- **`$options`** — 可选数组，其他主键将被忽略。 | Key | 说明 | | --- | --- | | `"extracerts"` | PKCS#12 文件中包含的额外证书或单个证书的数组。 | | `"friendly_name"` | 被证书和密钥使用的字符串 |

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
