---
id: "zh-php-function-function-openssl-pkcs7-verify"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs7_verify"
title: "校验一个已签名的 S/MIME 消息的签名"
signature: "bool|int openssl_pkcs7_verify(string $input_filename, int $flags, string|null $signers_certificates_filename = null, array $ca_info = [], string|null $untrusted_certificates_filename = null, string|null $content = null, string|null $output_filename = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs7-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 校验一个已签名的 S/MIME 消息的签名

## 说明

```php
bool|int openssl_pkcs7_verify(string $input_filename, int $flags, string|null $signers_certificates_filename = null, array $ca_info = [], string|null $untrusted_certificates_filename = null, string|null $content = null, string|null $output_filename = null)
```

`openssl_pkcs7_verify()` 读取给定文件中的 S/MIME 消息并且检查数字签名。

## 参数

- **`$input_filename`** — 消息的路径。
- **`$flags`** — `$flags` 可以用来影响如何校验签名 - 参见 PKCS7 常量 获取更多信息。
- **`$signers_certificates_filename`** — 如果已指定 `$signers_certificates_filename` 输出文件，它应该是一个用以保存文件的字符串名称，签名消息的个人证书将以 PEM 的格式保存起来。
- **`$ca_info`** — 如果 `$ca_info` 被指定了，它应该保存关于受信任的CA证书的信息供在验证过程中使用 - 参见 证书校验 获取关于该参数的更多信息。
- **`$untrusted_certificates_filename`** — 如果 `$untrusted_certificates_filename` 被指定了，该文件包含了一堆会被作为不受信任的ca使用的证书。
- **`$content`** — 你可以使用 `$content` 来指定带有已被验证数据的文件名，该文件内容已去掉了签名信息。
- **`$output_filename`**

## 返回值

如果签名已被认证，返回 `true`, 如果不正确 (消息已被篡改或者签名证书不可用) 则返回 `false`, 或者 - 错误时返回1.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$signers_certificates_filename`、`$untrusted_certificates_filename`、`$content` 和 `$output_filename` 现在可为 null。 |
| 7.2.0 | 新增 `$output_filename` 参数。 |

## 注释

> 正如 RFC 2045 中指定的，`$input_filename` 参数最多不可超过 76 个字符串。
