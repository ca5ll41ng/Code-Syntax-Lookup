---
id: "en-php-function-memcached-deletemulti"
language: "php"
lang: "en"
category: "function"
name: "Memcached::deleteMulti"
title: "Delete multiple items"
signature: "public array Memcached::deleteMulti(array $keys, int $time = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.deletemulti.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete multiple items

## Description

```php
public array Memcached::deleteMulti(array $keys, int $time = 0)
```

Delete the array of `$keys` from the server.

## Parameters

- **`$keys`** — The keys to be deleted.
- **`$time`** — The amount of time the server will wait to delete the items.
  > As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero `$time` will cause the deletion to fail. `Memcached::getResultCode()` will return `MEMCACHED_INVALID_ARGUMENTS`.



## Return Values

Returns an array indexed by `$keys`. Each element is `true` if the corresponding key was deleted, or one of the `Memcached::RES_{*}` constants if the corresponding deletion failed.

The `Memcached::getResultCode()` will return the result code for the last executed delete operation, that is, the delete operation for the last element of `$keys`.

## See Also

`Memcached::delete()` `Memcached::deleteByKey()` `Memcached::deleteMultiByKey()`
