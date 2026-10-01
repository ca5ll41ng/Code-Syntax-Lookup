---
id: "zh-php-function-function-openssl-x509-export"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_export"
title: "以字符串格式导出证书"
signature: "bool openssl_x509_export(OpenSSLCertificate|string $certificate, string $output, bool $no_text = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 以字符串格式导出证书

## 说明

```php
bool openssl_x509_export(OpenSSLCertificate|string $certificate, string $output, bool $no_text = true)
```

`openssl_x509_export()` 将 `$certificate` 以 PEM 编码的格式导出到名为 `$output` 的字符串类型的变量中。

## 参数

- **`$certificate`** — 参见密钥／证书参数以获取有效值列表。
- **`$output`** — 成功，将会存储 PEM。
- **`$no_text`** — 可选参数 `$notext` 影响输出的冗余度。如果设为 `false`，输出内容将包含附加的人类可读信息。`$notext` 的缺省值为 `true`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
