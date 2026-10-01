---
id: "zh-php-function-function-openssl-csr-get-public-key"
language: "php"
lang: "zh"
category: "function"
name: "openssl_csr_get_public_key"
title: "返回 CSR 的公钥"
signature: "OpenSSLAsymmetricKey|false openssl_csr_get_public_key(OpenSSLCertificateSigningRequest|string $csr, bool $short_names = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-csr-get-public-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 CSR 的公钥

## 说明

```php
OpenSSLAsymmetricKey|false openssl_csr_get_public_key(OpenSSLCertificateSigningRequest|string $csr, bool $short_names = true)
```

`openssl_csr_get_public_key()` 从 `$csr` 中提取公钥供其他功能使用。

## 参数

- **`$csr`** — See CSR parameters for a list of valid values.
- **`$short_names`**
  > 该参数可以省略。



## 返回值

成功时返回 `OpenSSLAsymmetricKey`，错误则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时此函数现在返回 `OpenSSLAsymmetricKey` 实例；之前返回类型 `OpenSSL key` 的 `resource`。 |
| 8.0.0 | `$csr` 现在接受 `OpenSSLCertificateSigningRequest` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**openssl_csr_get_public_key() 示例**

```php


<?php
$subject = array(
    "commonName" => "example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$csr = openssl_csr_new($subject, $private_key, array('digest_alg' => 'sha256') );
$public_key = openssl_csr_get_public_key($csr);
$info = openssl_pkey_get_details($public_key);
echo $info['key'];
?>

    
```

## 参见

`openssl_csr_get_subject()` `openssl_csr_new()` `openssl_pkey_get_details()` `openssl_pkey_export_to_file()` `openssl_pkey_export()`
