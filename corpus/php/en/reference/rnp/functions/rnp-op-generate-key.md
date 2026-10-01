---
id: "en-php-function-function-rnp-op-generate-key"
language: "php"
lang: "en"
category: "function"
name: "rnp_op_generate_key"
title: "Generate key"
signature: "string|false rnp_op_generate_key(RnpFFI $ffi, string $userid, string $key_alg, [string $sub_alg = ...], [array $options = ...])"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-op-generate-key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generate key

## Description

```php
string|false rnp_op_generate_key(RnpFFI $ffi, string $userid, string $key_alg, [string $sub_alg = ...], [array $options = ...])
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$userid`** — PGP User ID - text that is intended to represent the name and email address of the key holder.
- **`$key_alg`** — Primary key algorithm (i.e. 'RSA', 'DSA', etc).
- **`$sub_alg`** — Subkey algorithm. If not set, subkey will not be generated.
- **`$options`** — An associative array with options.
  | Key | Data type |  |
  | --- | --- | --- |
  | `"bits"` | integer | Primary key size in bits. Applicable only to RSA, DSA and El-Gamal keys. |
  | `"hash"` | string | Hash algorithm used in self signature or subkey binding signature. |
  | `"dsa_qbits"` | integer | Set size of a `q` parameter for DSA key. Note: appropriate default value will be set, depending on key bits. However you may override it if needed. |
  | `"curve"` | string | Set the curve used for ECC key. Note: this is only applicable for ECDSA, ECDH and SM2 keys. |
  | `"request_password"` | boolean | Enable requesting password via password provider. This password will be used for key encryption. Password provider callback function should be set in advance by calling `rnp_ffi_set_pass_provider()`. Note: this setting will be ignored if password was set via`"password"` |
  | `"password"` | string | Set the password used to encrypt the secret key data. |
  | `"expiration"` | integer | Set the key and subkey expiration time in seconds. |
  | `"sub_bits"` | integer | Subkey size in bits. Applicable only to RSA, DSA and El-Gamal keys. |
  | `"sub_hash"` | string | Hash algorithm used in subkey self signature or subkey binding signature. |
  | `"sub_curve"` | string | Set the curve used for ECC subkey. Note: this is only applicable for ECDSA, ECDH and SM2 keys. |



## Return Values

Fingerprint of the generated primary key or `false` on failure. This fingerprint can be used later to reference the key in sign and encrypt operations. The key data is stored in FFI memory context and can be saved using `rnp_save_keys()` or `rnp_save_keys_to_path()`.
