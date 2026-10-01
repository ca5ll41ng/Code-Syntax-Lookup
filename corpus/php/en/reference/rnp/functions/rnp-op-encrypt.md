---
id: "en-php-function-function-rnp-op-encrypt"
language: "php"
lang: "en"
category: "function"
name: "rnp_op_encrypt"
title: "Encrypt message"
signature: "string|false rnp_op_encrypt(RnpFFI $ffi, string $message, array $recipient_keys_fp, [array $options = ...])"
module: "rnp"
source_url: "https://www.php.net/manual/en/function.rnp-op-encrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Encrypt message

## Description

```php
string|false rnp_op_encrypt(RnpFFI $ffi, string $message, array $recipient_keys_fp, [array $options = ...])
```

## Parameters

- **`$ffi`** — The FFI object returned by `rnp_ffi_create()`.
- **`$message`** — Message to be encrypted.
- **`$recipient_keys_fp`** — Array with fingerprints of recipient's keys. At least one key must be present.
- **`$options`** — An associative array with options.
  | Key | Data type |  |
  | --- | --- | --- |
  | `"compression_alg"` | string | Compression algorithm. Both `"compression_alg"` and `"compression_level"` must be set in order to enable data compression. |
  | `"compression_level"` | integer | Compression level, 0-9. 0 disables compression. |
  | `"armor"` | boolean | Enable ASCII-armored output. Disabled by default. |
  | `"add_signature"` | boolean | Encrypted message will be also signed. |
  | `"hash"` | string | Set hash algorithm used during signature calculation. "add_signature" option should be set to `true` |
  | `"creation_time"` | integer | Set signature creation time in seconds since Jan, 1 1970 UTC. By default current time is used. |
  | `"expiration_time"` | integer | Set signature expiration time in seconds since the creation time. 0 value is used to mark signature as non-expiring (default value). |
  | `"password"` | string | Add password which is used to encrypt data. |
  | `"cipher"` | string | Set symmetric encryption algorithm. Possible values are "IDEA", "TRIPLEDES", "CAST5", "BLOWFISH", "AES128", "AES192", "AES256", "TWOFISH", "CAMELLIA128", "CAMELLIA192", "CAMELLIA256", "SM4". |
  | `"aead"` | string | Set AEAD mode algorithm. Possible values are "None" to disable AEAD, "EAX", "OCB". |
  | `"aead_bits"` | integer | Set chunk length for AEAD mode via number of chunk size bits. Must be between 0 to 56. |
  | `"flags"` | integer | Set additional encryption flags. Supported flags: RNP_ENCRYPT_NOWRAP - do not wrap the data in a literal data packet. This would allow to encrypt already signed data. |
  | `"file_name"` | string | Set the internally stored file name for the data being encrypted. Special value _CONSOLE may be used to mark message as 'for your eyes only', i.e. it should not be stored anywhere but only displayed to the receiver. Default is the empty string. |
  | `"file_mtime"` | integer | Set input file modification date in seconds since Jan, 1 1970 UTC. |



## Return Values

Encrypted data on success or `false` on failure.
