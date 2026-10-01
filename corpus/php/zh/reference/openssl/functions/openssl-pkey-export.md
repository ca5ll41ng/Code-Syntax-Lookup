---
id: "zh-php-function-function-openssl-pkey-export"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkey_export"
title: "将一个密钥的可输出表示转换为字符串"
signature: "bool openssl_pkey_export(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $key, string $output, string|null $passphrase = null, array|null $options = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkey-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将一个密钥的可输出表示转换为字符串

## 说明

```php
bool openssl_pkey_export(OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $key, string $output, string|null $passphrase = null, array|null $options = null)
```

`openssl_pkey_export()` 将 `$key` 当作 PEM 编码字符串导出并且将之保存到`$output` (通过引用传递的)中。

> 必须安装有效的 `openssl.cnf` 以保证此函数正确运行。参考有关安装的说明以获得更多信息。

## 参数

- **`$key`**
- **`$output`**
- **`$passphrase`** — 密钥可以通过 `$passphrase` 来保护。
- **`$options`** — `$options` 可以用来调整导出流程，通过指定或者覆盖openssl配置文件选项。参见 `openssl_csr_new()` 获取更多关于 `$options` 的信息。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |
