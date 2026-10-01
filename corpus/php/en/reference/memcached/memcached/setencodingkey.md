---
id: "en-php-function-memcached-setencodingkey"
language: "php"
lang: "en"
category: "function"
name: "Memcached::setEncodingKey"
title: "Set AES encryption key for data in Memcached"
signature: "public bool Memcached::setEncodingKey(string $key)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.setencodingkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set AES encryption key for data in Memcached

## Description

```php
public bool Memcached::setEncodingKey(string $key)
```

This method sets the AES encryption/decryption key for data written to and read from Memcached.

## Parameters

- **`$key`** — The AES key.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `Memcached::get()` `Memcached::add()` `Memcached::set()`
