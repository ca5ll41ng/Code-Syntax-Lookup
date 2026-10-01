---
id: "en-php-function-function-rnp-locate-key"
language: "php"
lang: "en"
category: "function"
name: "rnp_locate_key"
title: "Search for the key"
signature: "string|false rnp_locate_key(RnpFFI $ffi, string $identifier_type, string $identifier)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-locate-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Search for the key

## Description

```php
string|false rnp_locate_key(RnpFFI $ffi, string $identifier_type, string $identifier)
```

Note: only valid userids are checked while searching by userid.

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$identifier_type`** — Identifier type string: "userid", "keyid", "fingerprint", "grip".
- **`$identifier`** — PGP User ID (name and email) for "userid" type, hexadecimal string that represents key id, fingerprint or key grip correspondingly.

## Return Values

Returns hexadecimal fingerprint of the key found on success or `false` on failure.
