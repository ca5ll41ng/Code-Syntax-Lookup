---
id: "en-php-function-function-mhash"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "mhash"
title: "Computes hash"
signature: "#[\\Deprecated(since: '8.1')] string|false mhash(int $algo, string $data, string|null $key = null)"
module: "mhash"
source_url: "https://www.php.net/manual/en/function.mhash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Computes hash

## Description

```php
#[\Deprecated(since: '8.1')] string|false mhash(int $algo, string $data, string|null $key = null)
```

`mhash()` applies a hash function specified by `$algo` to the `$data`.

## Parameters

- **`$algo`** — The hash ID. One of the `MHASH_hashname` constants.
- **`$data`** — The user input, as a string.
- **`$key`** — If specified, the function will return the resulting HMAC instead. HMAC is keyed hashing for message authentication, or simply a message digest that depends on the specified key. Not all algorithms supported in mhash can be used in HMAC mode.

## Return Values

Returns the resulting hash (also called digest) or HMAC as a string, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | This function has been deprecated. Use the `hash_*()` functions instead. |
| 8.0.0 | `$key` is now nullable. |
