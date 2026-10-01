---
id: "en-php-function-memcached-deletemultibykey"
language: "php"
lang: "en"
category: "function"
name: "Memcached::deleteMultiByKey"
title: "Delete multiple items from a specific server"
signature: "public array Memcached::deleteMultiByKey(string $server_key, array $keys, int $time = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.deletemultibykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete multiple items from a specific server

## Description

```php
public array Memcached::deleteMultiByKey(string $server_key, array $keys, int $time = 0)
```

`Memcached::deleteMultiByKey()` is functionally equivalent to `Memcached::deleteMulti()`, except that the free-form `$server_key` can be used to map the `$keys` to a specific server.

## Parameters

- **`$server_key`** — The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.
- **`$keys`** — The keys to be deleted.
- **`$time`** — The amount of time the server will wait to delete the items.
  > As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero `$time` will cause the deletion to fail. `Memcached::getResultCode()` will return `MEMCACHED_INVALID_ARGUMENTS`.



## Return Values

Returns an array indexed by `$keys`. Each element is `true` if the corresponding key was deleted, or one of the `Memcached::RES_{*}` constants if the corresponding deletion failed.

The `Memcached::getResultCode()` will return the result code for the last executed delete operation, that is, the delete operation for the last element of `$keys`.

## See Also

`Memcached::delete()` `Memcached::deleteByKey()` `Memcached::deleteMulti()`
