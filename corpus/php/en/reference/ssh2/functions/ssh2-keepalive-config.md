---
id: "en-php-function-function-ssh2-keepalive-config"
language: "php"
lang: "en"
category: "function"
name: "ssh2_keepalive_config"
title: "Configure how often keepalive messages should be sent"
signature: "void ssh2_keepalive_config(resource $session, bool $want_reply, int $interval)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-keepalive-config.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Configure how often keepalive messages should be sent

## Description

```php
void ssh2_keepalive_config(resource $session, bool $want_reply, int $interval)
```

Configures how often keepalive messages are sent on the given `$session`, and whether the server is asked to reply to them.

Keepalive messages are not sent automatically. Once configured, `ssh2_keepalive_send()` must be called to actually send a keepalive message.

> This function is only available when the extension is built against a libssh2 version providing keepalive support.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$want_reply`** — Whether the server is requested to reply to keepalive messages. Requesting a reply makes an unresponsive server detectable, at the cost of some extra traffic.
- **`$interval`** — The number of seconds that may pass without any traffic before a keepalive message should be sent. A value of `0` disables keepalive messages, and a value of `1` is treated as `2` by the underlying library. — Accepted values range from `0` to `4294967295`.

## Return Values

No value is returned.

## Errors/Exceptions

An `E_WARNING` is emitted when `$interval` is outside the accepted range, in which case the keepalive configuration is left unchanged.

## Examples

**Sending keepalive messages**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

// Ask the server to reply, after 30 seconds without any traffic
ssh2_keepalive_config($connection, true, 30);

// Keepalive messages are only sent when this function is called
ssh2_keepalive_send($connection);
?>

   
```

## See Also

 `ssh2_keepalive_send()` `ssh2_connect()`
