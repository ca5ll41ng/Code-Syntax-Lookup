---
id: "en-php-function-function-ssh2-shell"
language: "php"
lang: "en"
category: "function"
name: "ssh2_shell"
title: "Request an interactive shell"
signature: "resource|false ssh2_shell(resource $session, string $termtype = \"vanilla\", array|null $env = null, int $width = 80, int $height = 25, int $width_height_type = SSH2_TERM_UNIT_CHARS)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-shell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Request an interactive shell

## Description

```php
resource|false ssh2_shell(resource $session, string $termtype = "vanilla", array|null $env = null, int $width = 80, int $height = 25, int $width_height_type = SSH2_TERM_UNIT_CHARS)
```

Open a shell at the remote end and allocate a stream for it.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$termtype`** — `$termtype` should correspond to one of the entries in the target system's `/etc/termcap` file.
- **`$env`** — `$env` may be passed as an associative array of name/value pairs to set in the target environment.
- **`$width`** — Width of the virtual terminal.
- **`$height`** — Height of the virtual terminal.
- **`$width_height_type`** — `$width_height_type` should be one of `SSH2_TERM_UNIT_CHARS` or `SSH2_TERM_UNIT_PIXELS`.

## Return Values

Returns a stream `resource` on success, or `false` on failure.

## Examples

**Requesting an interactive shell**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stream = ssh2_shell($connection, 'vt102', null, 80, 24, SSH2_TERM_UNIT_CHARS);
?>

   
```

## See Also

 `ssh2_exec()` `ssh2_tunnel()` `ssh2_fetch_stream()`
