---
id: "en-php-function-memcached-resetserverlist"
language: "php"
lang: "en"
category: "function"
name: "Memcached::resetServerList"
title: "Clears all servers from the server list"
signature: "public bool Memcached::resetServerList()"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.resetserverlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clears all servers from the server list

## Description

```php
public bool Memcached::resetServerList()
```

`Memcached::resetserverlist()` removes all memcache servers from the known server list, resetting it back to empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`Memcached::addServer()` `Memcached::addServers()`
