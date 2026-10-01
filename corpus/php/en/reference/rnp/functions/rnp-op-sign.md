---
id: "en-php-function-function-rnp-op-sign"
language: "php"
lang: "en"
category: "function"
name: "rnp_op_sign"
title: "Perform signing operation on a binary data, return embedded signature(s)"
signature: "string|false rnp_op_sign(RnpFFI $ffi, string $data, array $keys_fp, [array $options = ...])"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-op-sign.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perform signing operation on a binary data, return embedded signature(s)

## Description

```php
string|false rnp_op_sign(RnpFFI $ffi, string $data, array $keys_fp, [array $options = ...])
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$data`** — Data to be signed.
- **`$keys_fp`** — Array with key fingerprints. At least one key must be provided. Keys should be present in `$ffi`.
- **`$options`** — An associative array with options.
  | Key | Data type |  |
  | --- | --- | --- |
  | `"compression_alg"` | string | Compression algorithm. Both `"compression_alg"` and `"compression_level"` must be set in order to enable data compression. |
  | `"compression_level"` | integer | Compression level, 0-9. 0 disables compression. |
  | `"armor"` | boolean | Enable ASCII-armored output. Disabled by default. |
  | `"hash"` | string | Set hash algorithm used during signature calculation. |
  | `"creation_time"` | integer | Set signature creation time in seconds since Jan, 1 1970 UTC. By default current time is used. |
  | `"expiration_time"` | integer | Set signature expiration time in seconds since the creation time. 0 value is used to mark signature as non-expiring (default value). |
  | `"file_name"` | string | Set input file name.Special value _CONSOLE may be used to mark message as 'for your eyes only', i.e. it should not be stored anywhere but only displayed to the receiver. Default is the empty string. |
  | `"file_mtime"` | integer | Set input file modification date in seconds since Jan, 1 1970 UTC. |



## Return Values

Data with embedded signature(s) on success or `false` on failure.
