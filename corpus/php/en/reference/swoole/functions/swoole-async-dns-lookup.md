---
id: "en-php-function-function-swoole-async-dns-lookup"
language: "php"
lang: "en"
category: "function"
name: "swoole_async_dns_lookup"
title: "Async and non-blocking hostname to IP lookup"
signature: "bool swoole_async_dns_lookup(string $hostname, callable $callback)"
module: "swoole"
source_url: "https://www.php.net/manual/en/function.swoole-async-dns-lookup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Async and non-blocking hostname to IP lookup

## Description

```php
bool swoole_async_dns_lookup(string $hostname, callable $callback)
```

## Parameters

- **`$hostname`** — The host name.
- **`$callback`**
  ```php
  mixed {callback}(string $hostname, string $ip)
  ```


  - **`$hostname`** — The host name.
  - **`$IP`** — The IP address.



## Return Values

Returns `true` on success or `false` on failure.
