---
id: "en-php-function-function-ssh2-disconnect"
language: "php"
lang: "en"
category: "function"
name: "ssh2_disconnect"
title: "Close a connection to a remote SSH server"
signature: "bool ssh2_disconnect(resource $session)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-disconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close a connection to a remote SSH server

## Description

```php
bool ssh2_disconnect(resource $session)
```

Close a connection to a remote SSH server.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `ssh2_connect()`
