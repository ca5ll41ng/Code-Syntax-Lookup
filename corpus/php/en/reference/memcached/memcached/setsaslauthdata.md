---
id: "en-php-function-memcached-setsaslauthdata"
language: "php"
lang: "en"
category: "function"
name: "Memcached::setSaslAuthData"
title: "Set the credentials to use for authentication"
signature: "public bool Memcached::setSaslAuthData(string $username, string $password)"
module: "memcached"
source_url: "https://www.php.net/manual/en/memcached.setsaslauthdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the credentials to use for authentication

## Description

```php
public bool Memcached::setSaslAuthData(string $username, string $password)
```

`Memcached::setSaslAuthData()` sets the username and password that should be used for SASL authentication with the memcache servers.

*This method is only available when the memcached extension is built with SASL support.* Please refer to Memcached setup for how to do this.

## Parameters

- **`$username`** — The username to use for authentication.
- **`$password`** — The password to use for authentication.

## Return Values

Returns `true` on success or `false` on failure.
