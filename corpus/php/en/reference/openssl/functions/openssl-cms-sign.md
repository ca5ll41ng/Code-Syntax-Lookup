---
id: "en-php-function-function-openssl-cms-sign"
language: "php"
lang: "en"
category: "function"
name: "openssl_cms_sign"
title: "Sign a file"
signature: "bool openssl_cms_sign(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, array|null $headers, int $flags = 0, int $encoding = OPENSSL_ENCODING_SMIME, string|null $untrusted_certificates_filename = null)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-cms-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sign a file

## Description

```php
bool openssl_cms_sign(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key, array|null $headers, int $flags = 0, int $encoding = OPENSSL_ENCODING_SMIME, string|null $untrusted_certificates_filename = null)
```

This function signs a file with an X.509 certificate and key.

## Parameters

- **`$input_filename`** — The name of the file to be signed.
- **`$output_filename`** — The name of the file to deposit the results.
- **`$certificate`** — The signing certificate. See Key/Certificate parameters for a list of valid values.
- **`$private_key`** — The key associated with `$certificate`. See Key/Certificate parameters for a list of valid values.
- **`$headers`** — An array of headers to be included in S/MIME output.
- **`$flags`** — Flags to be passed to `cms_sign()`.
- **`$encoding`** — The encoding of the output file. One of `OPENSSL_ENCODING_SMIME`, `OPENSSL_ENCODING_DER` or `OPENSSL_ENCODING_PEM`.
- **`$untrusted_certificates_filename`** — Intermediate certificates to be included in the signature.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`openssl_cms_sign()` example**

```php


<?php

openssl_cms_sign('input.txt', 'output.txt', 'file://cert.pem', 'file://privkey.pem', null, OPENSSL_CMS_BINARY, OPENSSL_ENCODING_DER, 'chain.pem');
?>

    
```
