---
id: "zh-php-function-function-openssl-csr-export"
language: "php"
lang: "zh"
category: "function"
name: "openssl_csr_export"
title: "将 CSR 作为字符串导出"
signature: "bool openssl_csr_export(OpenSSLCertificateSigningRequest|string $csr, string $output, bool $no_text = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-csr-export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 CSR 作为字符串导出

## 说明

```php
bool openssl_csr_export(OpenSSLCertificateSigningRequest|string $csr, string $output, bool $no_text = true)
```

`openssl_csr_export()` 获取证书签名请求（`$csr`）并通过引用保存其 PEM 格式的字符串（`$output`）。

## 参数

- **`$csr`** — See CSR parameters for a list of valid values.
- **`$output`** — 在成功时，该字符串将包含 PEM 编码的 CSR。
- **`$no_text`** — 可选参数 `$notext` 影响输出的冗余度。如果设为 `false`，输出内容将包含附加的人类可读信息。`$notext` 的缺省值为 `true`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$csr` 现在接受 `OpenSSLCertificateSigningRequest` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**openssl_csr_export() 示例**

```php


<?php
$subject = array(
    "commonName" => "example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$configargs = array(
    'digest_alg' => 'sha256WithRSAEncryption'
);
$csr = openssl_csr_new($subject, $private_key, $configargs);
openssl_csr_export($csr, $csr_string);
echo $csr_string;
?>

    
```

## 参见

`openssl_csr_export_to_file()` `openssl_csr_new()` `openssl_csr_sign()`
