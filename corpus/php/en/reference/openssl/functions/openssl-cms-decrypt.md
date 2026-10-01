---
id: "en-php-function-function-openssl-cms-decrypt"
language: "php"
lang: "en"
category: "function"
name: "openssl_cms_decrypt"
title: "Decrypt a CMS message"
signature: "bool openssl_cms_decrypt(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string|null $private_key = null, int $encoding = OPENSSL_ENCODING_SMIME)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-cms-decrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrypt a CMS message

## Description

```php
bool openssl_cms_decrypt(string $input_filename, string $output_filename, OpenSSLCertificate|string $certificate, OpenSSLAsymmetricKey|OpenSSLCertificate|array|string|null $private_key = null, int $encoding = OPENSSL_ENCODING_SMIME)
```

Decrypts a CMS message.

## Parameters

- **`$input_filename`** — The name of a file containing encrypted content.
- **`$output_filename`** — The name of the file to deposit the decrypted content.
- **`$certificate`** — The name of the file containing a certificate of the recipient.
- **`$private_key`** — The name of the file containing a PKCS#8 key.
- **`$encoding`** — The encoding of the input file. One of `OPENSSL_ENCODING_SMIME`, `OPENSSL_ENCODING_DER` or `OPENSSL_ENCODING_PEM`.

## Return Values

Returns `true` on success or `false` on failure.
