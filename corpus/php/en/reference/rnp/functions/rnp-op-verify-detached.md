---
id: "en-php-function-function-rnp-op-verify-detached"
language: "php"
lang: "en"
category: "function"
name: "rnp_op_verify_detached"
title: "Verify detached signatures"
signature: "array|false rnp_op_verify_detached(RnpFFI $ffi, string $data, string $signature)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-op-verify-detached.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Verify detached signatures

## Description

```php
array|false rnp_op_verify_detached(RnpFFI $ffi, string $data, string $signature)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$data`** — Source data.
- **`$signature`** — Detached signature data.

## Return Values

An associative array with information about verification results or `false` on failure.

| Key | Data type |  |
| --- | --- | --- |
| `"verification_status"` | string | Overall verification result, either "Success" string or appropriate error message. "Success" result is set when at least one signature is valid and successfully verified. Individual verification results for each signature can be checked in the "signatures" array. |
| `"file_name"` | string | File name. |
| `"file_mtime"` | integer | File modification time. |
| `"mode"` | string | Data protection (encryption) mode used in processed message. Currently defined values are "none", "cfb", "cfb-mdc", "aead-ocb", "aead-eax". |
| `"cipher"` | string | Symmetric cipher used for data encryption. |
| `"valid_integrity"` | boolean | `true` if message integrity protection was used (i.e. MDC or AEAD) and it was validated successfully. |
| `"signatures"` | array | An associative array describing each signature found. See description below. |

"signatures" sub-array.

| Key | Data type |  |
| --- | --- | --- |
| "verification_status" | string | Signature verification status, either "Success" string or appropriate error message. |
| "creation_time" | integer | Signature creation time in seconds since Jan, 1 1970 UTC. |
| "expiration_time" | integer | Signature expiration time in seconds since the creation time or 0 if signature never expires. |
| "hash" | string | Hash function algorithm used to calculate the signature. |
| "signing_key" | string | Fingerprint of the key used for signing. Could be "Not found" if corresponding public key is not loaded to the FFI object. |
| "signature_type" | string | Signature type. Currently defined values are: 'binary', 'text', 'standalone', 'certification (generic)', 'certification (persona)', 'certification (casual)', 'certification (positive)', 'subkey binding', 'primary key binding', 'direct', 'key revocation', 'subkey revocation', 'certification revocation', 'timestamp', 'uknown: 0..255'. |
