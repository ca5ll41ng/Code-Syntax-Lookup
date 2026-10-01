---
id: "en-php-function-function-ssh2-exec"
language: "php"
lang: "en"
category: "function"
name: "ssh2_exec"
title: "Execute a command on a remote server"
signature: "resource|false ssh2_exec(resource $session, string $command, [string $pty = ...], [array $env = ...], int $width = 80, int $height = 25, int $width_height_type = SSH2_TERM_UNIT_CHARS)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a command on a remote server

## Description

```php
resource|false ssh2_exec(resource $session, string $command, [string $pty = ...], [array $env = ...], int $width = 80, int $height = 25, int $width_height_type = SSH2_TERM_UNIT_CHARS)
```

Execute a command at the remote end and allocate a channel for it.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$command`**
- **`$pty`**
- **`$env`** — `$env` may be passed as an associative array of name/value pairs to set in the target environment.
- **`$width`** — Width of the virtual terminal.
- **`$height`** — Height of the virtual terminal.
- **`$width_height_type`** — `$width_height_type` should be one of `SSH2_TERM_UNIT_CHARS` or `SSH2_TERM_UNIT_PIXELS`.

## Return Values

Returns a stream on success or `false` on failure.

## Examples

**Executing a command**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stream = ssh2_exec($connection, '/usr/local/bin/php -i');
?>

   
```

## See Also

 `ssh2_connect()` `ssh2_shell()` `ssh2_tunnel()`
