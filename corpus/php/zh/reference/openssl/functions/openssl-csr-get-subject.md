---
id: "zh-php-function-function-openssl-csr-get-subject"
language: "php"
lang: "zh"
category: "function"
name: "openssl_csr_get_subject"
title: "返回 CSR 的主题"
signature: "array|false openssl_csr_get_subject(OpenSSLCertificateSigningRequest|string $csr, bool $short_names = true)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-csr-get-subject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 CSR 的主题

## 说明

```php
array|false openssl_csr_get_subject(OpenSSLCertificateSigningRequest|string $csr, bool $short_names = true)
```

`openssl_csr_get_subject()` 返回 `$csr` 中专有名称信息的主题，其中包含了通用名称（CN）、机构名称（O）、国家名（C）等字段。

## 参数

- **`$csr`** — See CSR parameters for a list of valid values.
- **`$short_names`** — `$short_names` 控制着数据如何在数组中被索引 - 如果 `$short_names` 为 `true` (默认) 将使用简称形式对字段进行索引，否则将使用全称形式 - 比如： CN 就是 commonName 的简称形式。

## 返回值

返回带有主题描述的关联数组， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$csr` 现在接受 `OpenSSLCertificateSigningRequest` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**openssl_csr_get_subject() 示例**

```php


<?php
$subject = array(
    "countryName" => "CA",
    "stateOrProvinceName" => "Alberta",
    "localityName" => "Calgary",
    "organizationName" => "XYZ Widgets Inc",
    "organizationalUnitName" => "PHP Documentation Team",
    "commonName" => "Wez Furlong",
    "emailAddress" => "wez@example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$configargs = array(
    'digest_alg' => 'sha512WithRSAEncryption'
);
$csr = openssl_csr_new($subject, $privkey, $configargs);
print_r(openssl_csr_get_subject($csr));
?>

    
```

以上示例的输出类似于：

```text


Array
(
    [C] => CA
    [ST] => Alberta
    [L] => Calgary
    [O] => XYZ Widgets Inc
    [OU] => PHP Documentation Team
    [CN] => Wez Furlong
    [emailAddress] => wez@example.com
)

    
```

## 参见

`openssl_csr_new()` `openssl_csr_get_public_key()` `openssl_x509_parse()`
