---
id: "en-php-function-memcached-touch"
language: "php"
lang: "en"
category: "function"
name: "Memcached::touch"
title: "Set a new expiration on an item"
signature: "public bool Memcached::touch(string $key, int $expiration = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.touch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a new expiration on an item

## Description

```php
public bool Memcached::touch(string $key, int $expiration = 0)
```

`Memcached::touch()` sets a new expiration value on the given key.

## Parameters

- **`$key`** — The key under which to store the value.
- **`$expiration`** — The expiration time, defaults to 0. See Expiration Times for more info.

## Return Values

Returns `true` on success or `false` on failure. Use `Memcached::getResultCode()` if necessary.

## See Also

`Memcached::touchByKey()`
