---
id: "en-php-function-function-ssh2-send-signal"
language: "php"
lang: "en"
category: "function"
name: "ssh2_send_signal"
title: "Send a signal to a remote process"
signature: "bool ssh2_send_signal(resource $channel, string $signal)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-send-signal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a signal to a remote process

## Description

```php
bool ssh2_send_signal(resource $channel, string $signal)
```

Sends a signal to the process running at the remote end of the given `$channel`.

> This function is only available when the extension is built against libssh2 >= 1.9.0.

## Parameters

- **`$channel`** — An SSH channel stream, as returned by `ssh2_exec()` or `ssh2_shell()`.
- **`$signal`** — The name of the signal to send, without the `SIG` prefix, as defined by the SSH connection protocol ([RFC 4254](4254)); for example `TERM`, `KILL` or `INT`. — The value is forwarded to the server as is; it is not validated against the names listed by the protocol.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

An `E_WARNING` is emitted when `$channel` is not an SSH channel stream, and when the signal could not be sent.

## Examples

**Interrupting a remote command**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stream = ssh2_exec($connection, 'trap "echo interrupted" INT; sleep 60');

ssh2_send_signal($stream, 'INT');

stream_set_blocking($stream, true);
echo stream_get_contents($stream);
?>

   
```

## See Also

 `ssh2_exec()` `ssh2_shell()` `ssh2_send_eof()`
