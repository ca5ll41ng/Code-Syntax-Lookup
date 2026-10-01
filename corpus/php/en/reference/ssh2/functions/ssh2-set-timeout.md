---
id: "en-php-function-function-ssh2-set-timeout"
language: "php"
lang: "en"
category: "function"
name: "ssh2_set_timeout"
title: "Set the timeout for blocking operations on a session"
signature: "void ssh2_set_timeout(resource $session, int $seconds, int $microseconds = 0)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-set-timeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the timeout for blocking operations on a session

## Description

```php
void ssh2_set_timeout(resource $session, int $seconds, int $microseconds = 0)
```

Sets how long a blocking operation on the given `$session` may wait before it is considered to have timed out.

When the resulting timeout is `0`, which is the default, no timeout is applied and blocking operations may wait indefinitely.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$seconds`** — The timeout, in seconds.
- **`$microseconds`** — An additional number of microseconds added to the timeout. The underlying library only supports millisecond precision, so this value is rounded up to the next whole millisecond.

## Return Values

No value is returned.

## Examples

**Limiting how long blocking operations may wait**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);

// Give up on blocking operations after 5.5 seconds
ssh2_set_timeout($connection, 5, 500000);

ssh2_auth_password($connection, 'username', 'password');
?>

   
```

## See Also

 `ssh2_connect()` `ssh2_keepalive_config()` `stream_set_timeout()`
