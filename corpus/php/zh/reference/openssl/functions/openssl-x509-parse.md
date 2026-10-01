---
id: "zh-php-function-function-openssl-x509-parse"
language: "php"
lang: "zh"
category: "function"
name: "openssl_x509_parse"
title: "解析 X509 证书并作为一个数组返回信息"
signature: "array|false openssl_x509_parse(OpenSSLCertificate|string $certificate, bool $short_names = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-x509-parse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解析 X509 证书并作为一个数组返回信息

## 说明

```php
array|false openssl_x509_parse(OpenSSLCertificate|string $certificate, bool $short_names = true)
```

`openssl_x509_parse()` 返回提供的 `$certificate` 证书的信息，包括主题名称、发行方名称、目的、有效日期等字段。

## 参数

- **`$certificate`** — X509 证书。有关有效值列表，参阅密钥/证书参数。
- **`$short_names`** — `$short_names` 控制数据在数组中的索引 - 如果 `$short_names` 为 `true`，字段将以短名称的形式被索引，否则将会使用长名称的形式 - 比如 CN 就是 commonName 的短名称格式。

## 返回值

*返回的数据的结构是（故意的）还没有文档化，因为它仍然会发生变化。*

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | OpenSSL 所有版本均不再允许解析不含秒数的 UTCTime 格式证书。自 OpenSSL 3.3 版本起，该格式已被明确禁止。 |
| 8.0.0 | `$certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
