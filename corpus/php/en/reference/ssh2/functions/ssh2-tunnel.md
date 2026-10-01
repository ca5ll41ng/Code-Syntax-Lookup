---
id: "en-php-function-function-ssh2-tunnel"
language: "php"
lang: "en"
category: "function"
name: "ssh2_tunnel"
title: "Open a tunnel through a remote server"
signature: "resource ssh2_tunnel(resource $session, string $host, int $port)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-tunnel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open a tunnel through a remote server

## Description

```php
resource ssh2_tunnel(resource $session, string $host, int $port)
```

Open a socket stream to an arbitrary host/port by way of the currently connected SSH server.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$host`**
- **`$port`**

## Return Values

## Examples

**Opening a tunnel to an arbitrary host**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_pubkey_file($connection, 'username', 'id_dsa.pub', 'id_dsa');

$tunnel = ssh2_tunnel($connection, '10.0.0.101', 12345);
?>

   
```

## See Also

 `ssh2_connect()` `fsockopen()`
