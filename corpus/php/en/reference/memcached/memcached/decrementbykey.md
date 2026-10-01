---
id: "en-php-function-memcached-decrementbykey"
language: "php"
lang: "en"
category: "function"
name: "Memcached::decrementByKey"
title: "Decrement numeric item's value, stored on a specific server"
signature: "public int|false Memcached::decrementByKey(string $server_key, string $key, int $offset = 1, int $initial_value = 0, int $expiry = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.decrementbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decrement numeric item's value, stored on a specific server

## Description

```php
public int|false Memcached::decrementByKey(string $server_key, string $key, int $offset = 1, int $initial_value = 0, int $expiry = 0)
```

`Memcached::decrementByKey()` decrements a numeric item's value by the specified `$offset`. If the item's value is not numeric, an error will result. If the operation would decrease the value below 0, the new value will be 0. `Memcached::decrementByKey()` will set the item to the `$initial_value` parameter if the key doesn't exist.

## Parameters

- **`$server_key`** — The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.
- **`$key`** — The key of the item to decrement.
- **`$offset`** — The amount by which to decrement the item's value.
- **`$initial_value`** — The value to set the item to if it doesn't currently exist.
- **`$expiry`** — The expiry time to set on the item.

## Return Values

Returns item's new value on success or `false` on failure.

## See Also

`Memcached::decrement()` `Memcached::increment()` `Memcached::incrementByKey()`
