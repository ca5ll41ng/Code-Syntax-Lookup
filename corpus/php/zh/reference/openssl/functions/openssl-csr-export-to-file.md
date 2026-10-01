---
id: "zh-php-function-function-openssl-csr-export-to-file"
language: "php"
lang: "zh"
category: "function"
name: "openssl_csr_export_to_file"
title: "将 CSR 导出到文件"
signature: "bool openssl_csr_export_to_file(OpenSSLCertificateSigningRequest|string $csr, string $output_filename, bool $no_text = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-csr-export-to-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 将 CSR 导出到文件

## 说明

```php
bool openssl_csr_export_to_file(OpenSSLCertificateSigningRequest|string $csr, string $output_filename, bool $no_text = true)
```

`openssl_csr_export_to_file()` 获取证书签名请求（`$csr`）并将之保存在以 `$output_filename` 命名的 PEM 格式文件中。

## 参数

- **`$csr`** — See CSR parameters for a list of valid values.
- **`$output_filename`** — 输出文件的路径。
- **`$no_text`** — 可选参数 `$notext` 影响输出的冗余度。如果设为 `false`，输出内容将包含附加的人类可读信息。`$notext` 的缺省值为 `true`。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$csr` 现在接受 `OpenSSLCertificateSigningRequest` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**openssl_csr_export_to_file() 范例**

```php


<?php
$subject = array(
    "commonName" => "example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$csr = openssl_csr_new($subject, $private_key, array('digest_alg' => 'sha384') );
openssl_pkey_export_to_file($private_key, 'example-priv.key');
// Along with the subject, the CSR contains the public key corresponding to the private key
openssl_csr_export_to_file($csr, 'example-csr.pem');
?>

    
```

## 参见

`openssl_csr_export()` `openssl_csr_new()` `openssl_csr_sign()`
