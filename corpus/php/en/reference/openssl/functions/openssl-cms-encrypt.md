---
id: "en-php-function-function-openssl-cms-encrypt"
language: "php"
lang: "en"
category: "function"
name: "openssl_cms_encrypt"
title: "Encrypt a CMS message"
signature: "bool openssl_cms_encrypt(string $input_filename, string $output_filename, OpenSSLCertificate|array|string $certificate, array|null $headers, int $flags = 0, int $encoding = OPENSSL_ENCODING_SMIME, string|int $cipher_algo = OPENSSL_CIPHER_AES_128_CBC)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-cms-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt a CMS message

## Description

```php
bool openssl_cms_encrypt(string $input_filename, string $output_filename, OpenSSLCertificate|array|string $certificate, array|null $headers, int $flags = 0, int $encoding = OPENSSL_ENCODING_SMIME, string|int $cipher_algo = OPENSSL_CIPHER_AES_128_CBC)
```

This function encrypts content to one or more recipients, based on the certificates that are passed to it.

## Parameters

- **`$input_filename`** — The file to be encrypted.
- **`$output_filename`** — The output file.
- **`$certificate`** — Recipients to encrypt to.
- **`$headers`** — Headers to include when S/MIME is used.
- **`$flags`** — Flags to be passed to CMS_sign.
- **`$encoding`** — An encoding to output. One of `OPENSSL_ENCODING_SMIME`, `OPENSSL_ENCODING_DER` or `OPENSSL_ENCODING_PEM`.
- **`$cipher_algo`** — A cipher to use.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `$cipher_algo` is now of type `int` or `string`. Previously, it was of type `int`. |
| 8.1.0 | The default cipher algorithm (`$cipher_algo`) is now AES-128-CBC (`OPENSSL_CIPHER_AES_128_CBC`). Previously, PKCS7/CMS was used (`OPENSSL_CIPHER_RC2_40`). |
