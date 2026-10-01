---
id: "en-php-function-function-rnp-op-sign-cleartext"
language: "php"
lang: "en"
category: "function"
name: "rnp_op_sign_cleartext"
title: "Perform signing operation on a textual data, return cleartext signed message"
signature: "string|false rnp_op_sign_cleartext(RnpFFI $ffi, string $data, array $keys_fp, [array $options = ...])"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-op-sign-cleartext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perform signing operation on a textual data, return cleartext signed message

## Description

```php
string|false rnp_op_sign_cleartext(RnpFFI $ffi, string $data, array $keys_fp, [array $options = ...])
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$data`** — Data to be signed.
- **`$keys_fp`** — Array with key fingerprints. At least one key must be provided. Keys should be present in `$ffi`.
- **`$options`** — An associative array with options.
  | Key | Data type |  |
  | --- | --- | --- |
  | `"armor"` | boolean | Enable ASCII-armored output. Disabled by default. |
  | `"hash"` | string | Set hash algorithm used during signature calculation. |
  | `"creation_time"` | integer | Set signature creation time in seconds since Jan, 1 1970 UTC. By default current time is used. |
  | `"expiration_time"` | integer | Set signature expiration time in seconds since the creation time. 0 value is used to mark signature as non-expiring (default value). |



## Return Values

Cleartext signed message containing source data with additional headers and ASCII-armored signature on success or `false` on failure.
