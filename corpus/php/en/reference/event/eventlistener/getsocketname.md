---
id: "en-php-function-eventlistener-getsocketname"
language: "php"
lang: "en"
category: "function"
name: "EventListener::getSocketName"
title: "Retrieves the current address to which the listener's socket is bound"
signature: "public static bool EventListener::getSocketName(string $address, [mixed $port = ...])"
module: "event"
source_url: "https://www.php.net/manual/en/eventlistener.getsocketname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves the current address to which the listener's socket is bound

## Description

```php
public static bool EventListener::getSocketName(string $address, [mixed $port = ...])
```

Retrieves the current address to which the listener's socket is bound.

## Parameters

- **`$address`** — Output parameter. IP-address depending on the socket address family.
- **`$port`** — Output parameter. The port the socket is bound to.

## Return Values

Returns `true` on success or `false` on failure.
