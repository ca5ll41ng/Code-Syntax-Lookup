---
id: "en-php-function-function-ssh2-forward-listen"
language: "php"
lang: "en"
category: "function"
name: "ssh2_forward_listen"
title: "Bind a port on the remote server and listen for connections"
signature: "resource|false ssh2_forward_listen(resource $session, int $port, [string $host = ...], int $max_connections = 16)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-forward-listen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bind a port on the remote server and listen for connections

## Description

```php
resource|false ssh2_forward_listen(resource $session, int $port, [string $host = ...], int $max_connections = 16)
```

Binds a port on the remote server and listen for connections.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$session`** — An SSH Session resource, obtained from a call to `ssh2_connect()`.
- **`$port`** — The port of the remote server.
- **`$host`**
- **`$max_connections`**

## Return Values

Returns an SSH2 Listener, or `false` on failure.

## See Also

 `ssh2_forward_accept()`
