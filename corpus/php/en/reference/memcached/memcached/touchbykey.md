---
id: "en-php-function-memcached-touchbykey"
language: "php"
lang: "en"
category: "function"
name: "Memcached::touchByKey"
title: "Set a new expiration on an item on a specific server"
signature: "public bool Memcached::touchByKey(string $server_key, string $key, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.touchbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a new expiration on an item on a specific server

## Description

```php
public bool Memcached::touchByKey(string $server_key, string $key, int $expiration = 0)
```

`Memcached::touchByKey()` is functionally equivalent to `Memcached::touch()`, except that the free-form `$server_key` can be used to map the `$key` to a specific server.

## Parameters

- **`$server_key`** — The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.
- **`$key`** — The key under which to store the value.
- **`$expiration`** — The expiration time, defaults to 0. See Expiration Times for more info.

## Return Values

Returns `true` on success or `false` on failure. Use `Memcached::getResultCode()` if necessary.

## See Also

`Memcached::touch()`
