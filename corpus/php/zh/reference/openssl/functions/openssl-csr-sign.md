---
id: "zh-php-function-function-openssl-csr-sign"
language: "php"
lang: "zh"
category: "function"
name: "openssl_csr_sign"
title: "用另一个证书签署 CSR（或者本身）并且生成一个证书"
signature: "OpenSSLCertificate|false openssl_csr_sign(OpenSSLCertificateSigningRequest|string $csr, OpenSSLCertificate|string|null $ca_certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, int $days, array|null $options = null, int $serial = 0, string|null $serial_hex = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-csr-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用另一个证书签署 CSR（或者本身）并且生成一个证书

## 说明

```php
OpenSSLCertificate|false openssl_csr_sign(OpenSSLCertificateSigningRequest|string $csr, OpenSSLCertificate|string|null $ca_certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, int $days, array|null $options = null, int $serial = 0, string|null $serial_hex = null)
```

`openssl_csr_sign()` 从给定的 CSR 生成 x509 证书。

> 必须安装有效的 `openssl.cnf` 以保证此函数正确运行。参考有关安装的说明以获得更多信息。

## 参数

- **`$csr`** — 由 `openssl_csr_new()` 函数生成的 CSR。 也可以是由类似`file://path/to/csr`格式指定的指向 PEM 编码的 CSR 路径，或者是一个由`openssl_csr_export()`函数生成的字符串。
- **`$ca_certificate`** — 生成的证书将由`$ca_certificate`签名。 如果`$ca_certificate` 为 `null`, 生成的证书将是自签名证书。
- **`$private_key`** — `$private_key` 是 `$ca_certificate` 证书对应的私钥。
- **`$days`** — `$days` 指定生成的证书在几天内有效的时间长度。
- **`$options`** — 可以通过 `$options` 确定 CSR 签名。 查看 `openssl_csr_new()` 方法获取 `$options` 的更多相关信息。
- **`$serial`** — 可选的已签发证书的序列号。如果未指定，将默认为 0。
- **`$serial_hex`** — 可选的十六进制字符串，表示已签发证书的序列号。 如果设置，将优先于 `$serial` 参数值。 如果未指定或设置为 `null`，则使用 `$serial` 参数值。

## 返回值

成功时返回 `OpenSSLCertificate`，失败则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 添加了 `$serial_hex` 参数。 |
| 8.0.0 | 成功时，此函数现在返回 `OpenSSLCertificate` 实例；之前返回类型 `OpenSSL X.509` 的 `resource`。 |
| 8.0.0 | `$csr` 现在接受 `OpenSSLCertificateSigningRequest` 实例；之前接受类型 `OpenSSL X.509 CSR` 的 `resource`。 |
| 8.0.0 | `$ca_certificate` 现在接受 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL X.509` 的 `resource`。 |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509` 的 `resource`。 |

## 示例

**`openssl_csr_sign()` 示例——签署 CSR（如何实现自己的 CA）**

```php


<?php
// Let's assume that this script is set to receive a CSR that has
// been pasted into a textarea from another page
$csrdata = $_POST["CSR"];

// We will sign the request using our own "certificate authority"
// certificate.  You can use any certificate to sign another, but
// the process is worthless unless the signing certificate is trusted
// by the software/users that will deal with the newly signed certificate

// We need our CA cert and its private key
$cacert = "file://path/to/ca.crt";
$privkey = array("file://path/to/ca.key", "your_ca_key_passphrase");

$usercert = openssl_csr_sign($csrdata, $cacert, $privkey, 365, array('digest_alg'=>'sha256') );

// Now display the generated certificate so that the user can
// copy and paste it into their local configuration (such as a file
// to hold the certificate for their SSL server)
openssl_x509_export($usercert, $certout);
echo $certout;

// Show any errors that occurred here
while (($e = openssl_error_string()) !== false) {
    echo $e . "\n";
}
?>

    
```
