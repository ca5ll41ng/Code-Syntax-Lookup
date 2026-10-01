---
id: "zh-php-function-function-openssl-pkey-export-to-file"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_export_to_file"
title: "将密钥导出到文件中"
signature: "bool openssl_pkey_export_to_file(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $key, string $output_filename, string|null $passphrase = null, array|null $options = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-export-to-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将密钥导出到文件中

## 说明

```php
bool openssl_pkey_export_to_file(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $key, string $output_filename, string|null $passphrase = null, array|null $options = null)
```

`openssl_pkey_export_to_file()` 将 ascii 格式（PEM 编码）的 `$key` 保存到名为 `$output_filename` 文件中。

> 必须安装有效的 `openssl.cnf` 以保证此函数正确运行。参考有关安装的说明以获得更多信息。

## 参数

- **`$key`**
- **`$output_filename`** — 输出文件的路径。
- **`$passphrase`** — 密钥可以通过值为`$passphrase`的密码来保护。
- **`$options`** — `$options` 可以用来调整导出流程，通过指定或者覆盖openssl配置文件选项。参见 `openssl_csr_new()` 获取更多关于 `$options` 的信息。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
