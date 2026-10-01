---
id: "en-php-function-function-mhash-keygen-s2k"
language: "php"
lang: "en"
category: "function"
name: "mhash_keygen_s2k"
title: "Generates a key"
signature: "#[\\Deprecated(since: '8.1')] string|false mhash_keygen_s2k(int $algo, string $password, string $salt, int $length)"
module: "mhash"
source_url: "https://www.php.net/manual/en/function.mhash-keygen-s2k.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Generates a key

## Description

```php
#[\Deprecated(since: '8.1')] string|false mhash_keygen_s2k(int $algo, string $password, string $salt, int $length)
```

Generates a key according to the given `$algo`, using an user provided `$password`.

This is the Salted S2K algorithm as specified in the OpenPGP document ([RFC 2440](2440)).

Keep in mind that user supplied passwords are not really suitable to be used as keys in cryptographic algorithms, since users normally choose keys they can write on keyboard. These passwords use only 6 to 7 bits per character (or less). It is highly recommended to use some kind of transformation (like this function) to the user supplied key.

## Parameters

- **`$algo`** — The hash ID used to create the key. One of the `MHASH_hashname` constants.
- **`$password`** — An user supplied password.
- **`$salt`** — Must be different and random enough for every key you generate in order to create different keys. Because `$salt` must be known when you check the keys, it is a good idea to append the key to it. Salt has a fixed length of 8 bytes and will be padded with zeros if you supply less bytes.
- **`$length`** — The key length, in bytes.

## Return Values

Returns the generated key as a string, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | This function has been deprecated. Use the `hash_*()` functions instead. |
