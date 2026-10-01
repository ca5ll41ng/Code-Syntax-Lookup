---
id: "en-php-function-swoole-async-dnslookup"
language: "php"
lang: "en"
category: "function"
name: "Swoole\\Async::dnsLookup"
title: "Async and non-blocking hostname to IP lookup."
signature: "public static void Swoole\\Async::dnsLookup(string $hostname, callable $callback)"
module: "swoole"
source_url: "https://www.php.net/manual/en/swoole-async.dnslookup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Async and non-blocking hostname to IP lookup.

## Description

```php
public static void Swoole\Async::dnsLookup(string $hostname, callable $callback)
```

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$hostname`** — The host name.
- **`$callback`**
  ```php
  mixed {callback}(string $hostname, string $ip)
  ```


  - **`$hostname`** — The host name.
  - **`$IP`** — The IP address.
