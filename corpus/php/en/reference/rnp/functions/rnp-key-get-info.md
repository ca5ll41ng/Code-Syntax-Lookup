---
id: "en-php-function-function-rnp-key-get-info"
language: "php"
lang: "en"
category: "function"
name: "rnp_key_get_info"
title: "Get information about the key"
signature: "array|false rnp_key_get_info(RnpFFI $ffi, string $key_fp)"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-key-get-info.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get information about the key

## Description

```php
array|false rnp_key_get_info(RnpFFI $ffi, string $key_fp)
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$key_fp`** — Key fingerprint.

## Return Values

An associative array with information about the key or `false` on failure.

| Key | Data type |  |
| --- | --- | --- |
| `"is_primary"` | boolean | `true` if this key is the primary key. |
| `"is_sub"` | boolean | `true` if this key is a subkey. |
| `"is_valid"` | boolean | `true` if public key is valid. This includes checks of the self-signatures, expiration times, revocations and so on. |
| `"is_revoked"` | boolean | `true` if this key is revoked. |
| `"is_superseded"` | boolean | `true` if this key is superseded. Present only if the key is revoked. |
| `"is_compromised"` | boolean | `true` if this key is compromised. Present only if the key is revoked. |
| `"is_retired"` | boolean | `true` if this key is retired. Present only if the key is revoked. |
| `"is_expired"` | boolean | `true` if this key is expired. |
| `"have_secret"` | boolean | `true` if this key has secret part. |
| `"is_locked"` | boolean | `true` if this key is currently locked. Only present for secret keys. |
| `"is_protected"` | boolean | `true` if this key is protected. Only present for secret keys. A protected key is one that is encrypted and can be safely held in memory and locked/unlocked as needed. |
| `"have_public"` | boolean | `true` if this key has public part. Generally all keys would have public part. |
| `"valid_till"` | integer | The timestamp till which key can be considered as valid. Note: this will take into account not only key's expiration, but revocations as well. For the subkey primary key's validity time will be also checked. |
| `"bits"` | integer | Number of bits in the key. For EC-based keys it will contain size of the curve. |
| `"alg"` | string | Key algorithm name. |
| `"subkeys"` | array | An indexed array containing fingerprint strings of subkeys. Only present for primary keys. Could be empty if primary key has no subkeys. |
| `"uids"` | array | An indexed array containing user ID strings. Only present for primary keys. Could be empty if primary key has no user ID-s. |
