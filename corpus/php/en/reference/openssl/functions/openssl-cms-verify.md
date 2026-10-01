---
id: "en-php-function-function-openssl-cms-verify"
language: "php"
lang: "en"
category: "function"
name: "openssl_cms_verify"
title: "Verify a CMS signature"
signature: "bool openssl_cms_verify(string $input_filename, int $flags = 0, string|null $certificates = null, array $ca_info = [], string|null $untrusted_certificates_filename = null, string|null $content = null, string|null $pk7 = null, string|null $sigfile = null, int $encoding = OPENSSL_ENCODING_SMIME)"
module: "openssl"
source_url: "https://www.php.net/manual/en/function.openssl-cms-verify.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verify a CMS signature

## Description

```php
bool openssl_cms_verify(string $input_filename, int $flags = 0, string|null $certificates = null, array $ca_info = [], string|null $untrusted_certificates_filename = null, string|null $content = null, string|null $pk7 = null, string|null $sigfile = null, int $encoding = OPENSSL_ENCODING_SMIME)
```

This function verifies a CMS signature, either attached or detached, with the specified encoding.

## Parameters

- **`$input_filename`** — The input file.
- **`$flags`** — Flags to pass to `cms_verify()`.
- **`$certificates`** — A file with the signer certificate and optionally intermediate certificates.
- **`$ca_info`** — An array containing self-signed certificate authority certificates.
- **`$untrusted_certificates_filename`** — A file containing additional intermediate certificates.
- **`$content`** — A file pointing to the content when signatures are detached.
- **`$pk7`**
- **`$sigfile`** — A file to save the signature to.
- **`$encoding`** — The encoding of the input file. One of `OPENSSL_ENCODING_SMIME`, `OPENSSL_ENCODING_DER` or `OPENSSL_ENCODING_PEM`.

## Return Values

Returns `true` on success or `false` on failure.
