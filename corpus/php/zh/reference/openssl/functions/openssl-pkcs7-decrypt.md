---
id: "zh-php-function-function-openssl-pkcs7-decrypt"
language: "php"
lang: "zh"
category: "function"
name: "openssl_pkcs7_decrypt"
title: "解密一个 S/MIME 加密的消息"
signature: "bool openssl_pkcs7_decrypt(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string|null $private_key = null)"
module: "openssl"
source_url: "https://www.php.net/manual/zh/function.openssl-pkcs7-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 解密一个 S/MIME 加密的消息

## 说明

```php
bool openssl_pkcs7_decrypt(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string|null $private_key = null)
```

使用由 `$certificate` 和 `$private_key` 指定的证书和与之关联的私钥解密 `$input_filename` 文件中包含的 S/MIME 加密消息。

## 参数

- **`$input_filename`**
- **`$output_filename`** — 解密的消息将被存入的文件中，以 `$output_filename` 命名。
- **`$certificate`**
- **`$private_key`**

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$private_key` 现在接受 `OpenSSLAsymmetricKey` 或 `OpenSSLCertificate` 实例；之前接受类型 `OpenSSL key` 或 `OpenSSL X.509 CSR` 的 `resource`。 |

## 示例

**`openssl_pkcs7_decrypt()` 示例**

```php


<?php
// $cert and $key are assumed to contain your personal certificate and private
// key pair, and that you are the recipient of an S/MIME message
$infilename = "encrypted.msg";  // this file holds your encrypted message
$outfilename = "decrypted.msg"; // make sure you can write to this file

if (openssl_pkcs7_decrypt($infilename, $outfilename, $cert, $key)) {
    echo "decrypted!";
} else {
    echo "failed to decrypt!";
}
?>

    
```
