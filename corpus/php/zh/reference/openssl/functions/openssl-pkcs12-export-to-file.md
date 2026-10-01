---
id: "zh-php-function-function-openssl-pkcs12-export-to-file"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs12_export_to_file"
title: "输出一个 PKCS#12 兼容的证书存储文件"
signature: "bool openssl_pkcs12_export_to_file(OpenSSLCertificate|string $certificate, string $output_filename, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string $passphrase, array $options = [])"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs12-export-to-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出一个 PKCS#12 兼容的证书存储文件

## 说明

```php
bool openssl_pkcs12_export_to_file(OpenSSLCertificate|string $certificate, string $output_filename, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, string $passphrase, array $options = [])
```

`openssl_pkcs12_export_to_file()` 以 PKCS#12 文件格式将 `$certificate` 保存至 `$output_filename` 文件中。

## 参数

- **`$certificate`** — 参见密钥／证书参数以获取有效值列表。
- **`$output_filename`** — 输出文件的路径。
- **`$private_key`** — PKCS#12 文件的私钥部分。 参见 公/私钥参数 获取可用值的列表。
- **`$passphrase`** — 用于解锁 PKCS#12 文件的加密密码。
- **`$options`** — 可选数组，其他主键将被忽略。 | Key | 说明 | | --- | --- | | `"extracerts"` | PKCS#12 文件中包含的额外证书或单个证书的数组。 | | `"friendly_name"` | 被证书和密钥使用的字符串 |

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
