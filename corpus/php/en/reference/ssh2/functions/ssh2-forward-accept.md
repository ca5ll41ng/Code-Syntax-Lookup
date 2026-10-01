---
id: "en-php-function-function-ssh2-forward-accept"
language: "php"
lang: "en"
category: "function"
name: "ssh2_forward_accept"
title: "Accept a connection created by a listener"
signature: "resource|false ssh2_forward_accept(resource $listener)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-forward-accept.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Accept a connection created by a listener

## Description

```php
resource|false ssh2_forward_accept(resource $listener)
```

Accepts a connection created by a listener.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$desc`** — An SSH2 Listener resource, obtained from a call to `ssh2_forward_listen()`.

## Return Values

Returns a stream resource, or `false` on failure.
