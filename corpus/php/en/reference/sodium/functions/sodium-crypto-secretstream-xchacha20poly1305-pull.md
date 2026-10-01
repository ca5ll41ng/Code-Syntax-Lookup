---
id: "en-php-function-function-sodium-crypto-secretstream-xchacha20poly1305-pull"
language: "php"
lang: "en"
category: "function"
name: "sodium_crypto_secretstream_xchacha20poly1305_pull"
title: "Decrypt a chunk of data from an encrypted stream"
signature: "array|false sodium_crypto_secretstream_xchacha20poly1305_pull(string $state, string $ciphertext, string $additional_data = \"\")"
module: "sodium"
source_url: "https://www.php.net/manual/en/function.sodium-crypto-secretstream-xchacha20poly1305-pull.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrypt a chunk of data from an encrypted stream

## Description

```php
array|false sodium_crypto_secretstream_xchacha20poly1305_pull(string $state, string $ciphertext, string $additional_data = "")
```

Decrypt a chunk of data from an encrypted stream.

## Parameters

- **`$state`** — See `sodium_crypto_secretstream_xchacha20poly1305_init_pull()` and `sodium_crypto_secretstream_xchacha20poly1305_init_push()`
- **`$ciphertext`** — The ciphertext chunk to decrypt.
- **`$additional_data`** — Optional additional data to include in the authentication tag.

## Return Values

An array with two values:

- `string`; The decrypted chunk
- `int`; An optional tag (if provided during push). Possible values: `SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_MESSAGE`: the most common tag, that doesn't add any information about the nature of the message. `SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_FINAL`: indicates that the message marks the end of the stream, and erases the secret key used to encrypt the previous sequence. `SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_PUSH`: indicates that the message marks the end of a set of messages, but not the end of the stream. For example, a huge JSON string sent as multiple chunks can use this tag to indicate to the application that the string is complete and that it can be decoded. But the stream itself is not closed, and more data may follow. `SODIUM_CRYPTO_SECRETSTREAM_XCHACHA20POLY1305_TAG_REKEY`: "forget" the key used to encrypt this message and the previous ones, and derive a new secret key.
