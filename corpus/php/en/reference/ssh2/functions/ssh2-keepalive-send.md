---
id: "en-php-function-function-ssh2-keepalive-send"
language: "php"
lang: "en"
category: "function"
name: "ssh2_keepalive_send"
title: "Send a keepalive message"
signature: "int|false ssh2_keepalive_send(resource $session)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-keepalive-send.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a keepalive message

## Description

```php
int|false ssh2_keepalive_send(resource $session)
```

Sends a keepalive message on the given `$session`, according to the configuration set with `ssh2_keepalive_config()`.

> This function is only available when the extension is built against a libssh2 version providing keepalive support.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.

## Return Values

Returns the number of seconds that may pass before another keepalive message must be sent, or `false` on failure. `0` is returned when keepalive messages are disabled.

Since `0` and `false` are both falsy, the `===` operator has to be used to tell them apart.

## Examples

**Sending a keepalive message**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
ssh2_keepalive_config($connection, true, 30);

$seconds = ssh2_keepalive_send($connection);

if ($seconds === false) {
    echo "The keepalive message could not be sent", PHP_EOL;
} elseif ($seconds === 0) {
    echo "Keepalive messages are disabled", PHP_EOL;
} else {
    echo "Next keepalive message due in $seconds seconds", PHP_EOL;
}
?>

   
```

## See Also

 `ssh2_keepalive_config()` `ssh2_connect()`
