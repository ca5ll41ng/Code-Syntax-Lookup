---
id: "en-php-function-function-ssh2-shell-resize"
language: "php"
lang: "en"
category: "function"
name: "ssh2_shell_resize"
title: "Change the dimensions of a channel's pseudo-terminal"
signature: "bool ssh2_shell_resize(resource $channel, int $width, int $height, int $width_px = 0, int $height_px = 0)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-shell-resize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change the dimensions of a channel's pseudo-terminal

## Description

```php
bool ssh2_shell_resize(resource $channel, int $width, int $height, int $width_px = 0, int $height_px = 0)
```

Requests that the pseudo-terminal (PTY) attached to the given `$channel` be resized to the given dimensions.

> The extension declares only the first three parameters, under the name `session` for `$channel`. As a result, `$width_px` and `$height_px` can only be passed positionally.

## Parameters

- **`$channel`** — An SSH channel stream, as returned by `ssh2_exec()` or `ssh2_shell()`.
- **`$width`** — The width of the terminal, in characters.
- **`$height`** — The height of the terminal, in characters.
- **`$width_px`** — The width of the terminal in pixels, or `0` to leave the pixel dimensions unspecified.
- **`$height_px`** — The height of the terminal in pixels, or `0` to leave the pixel dimensions unspecified.

## Return Values

Returns `true`, or `false` when `$channel` is not an SSH channel stream.

The outcome of the resize request itself is not reported: `true` is returned even when the remote end does not honour it.

## Errors/Exceptions

An `E_WARNING` is emitted when `$channel` is not an SSH channel stream.

## Examples

**Resizing the pseudo-terminal of a shell**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$shell = ssh2_shell($connection, 'xterm', null, 80, 24);

// Tell the remote end the terminal is now 132 columns by 43 rows
ssh2_shell_resize($shell, 132, 43);
?>

   
```

## See Also

 `ssh2_shell()` `ssh2_exec()`
