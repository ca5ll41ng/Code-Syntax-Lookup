---
id: "zh-php-function-function-openssl-x509-export-to-file"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_export_to_file"
title: "导出证书至文件"
signature: "bool openssl_x509_export_to_file(OpenSSLCertificate|string $certificate, string $output_filename, bool $no_text = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-export-to-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 导出证书至文件

## 说明

```php
bool openssl_x509_export_to_file(OpenSSLCertificate|string $certificate, string $output_filename, bool $no_text = true)
```

`openssl_x509_export_to_file()` 将 `$certificate` 以 PEM 编码的格式保存到名为 `$output_filename` 的文件中。

## 参数

- **`$certificate`** — 参见密钥／证书参数以获取有效值列表。
- **`$output_filename`** — 输出文件的路径。
- **`$no_text`** — 可选参数 `$notext` 影响输出的冗余度。如果设为 `false`，输出内容将包含附加的人类可读信息。`$notext` 的缺省值为 `true`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
