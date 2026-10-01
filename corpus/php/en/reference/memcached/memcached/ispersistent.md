---
id: "en-php-function-memcached-ispersistent"
language: "php"
lang: "en"
category: "function"
name: "Memcached::isPersistent"
title: "Check if a persistent connection to memcache is being used"
signature: "public bool Memcached::isPersistent()"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.ispersistent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a persistent connection to memcache is being used

## Description

```php
public bool Memcached::isPersistent()
```

`Memcached::isPersistent()` checks if the connections to the memcache servers are persistent connections.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if Memcache instance uses a persistent connection, `false` otherwise.

## See Also

`Memcached::isPristine()`
