---
id: "en-php-function-memcached-getallkeys"
language: "php"
lang: "en"
category: "function"
name: "Memcached::getAllKeys"
title: "Gets the keys stored on all the servers"
signature: "public array|false Memcached::getAllKeys()"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.getallkeys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the keys stored on all the servers

## Description

```php
public array|false Memcached::getAllKeys()
```

`Memcached::getAllKeys()` queries each memcache server and retrieves an array of all keys stored on them at that point in time. This is not an atomic operation, so it isn't a truly consistent snapshot of the keys at point in time. As memcache doesn't guarantee to return all keys you also cannot assume that all keys have been returned.

> This method is intended for debugging purposes and should not be used at scale!

## Parameters

This function has no parameters.

## Return Values

Returns the keys stored on all the servers on success or `false` on failure.
