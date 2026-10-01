---
id: "en-php-function-function-ssh2-scp-recv"
language: "php"
lang: "en"
category: "function"
name: "ssh2_scp_recv"
title: "Request a file via SCP"
signature: "bool ssh2_scp_recv(resource $session, string $remote_file, string $local_file)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-scp-recv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Request a file via SCP

## Description

```php
bool ssh2_scp_recv(resource $session, string $remote_file, string $local_file)
```

Copy a file from the remote server to the local filesystem using the SCP protocol.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$remote_file`** — Path to the remote file.
- **`$local_file`** — Path to the local file.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Downloading a file via SCP**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

ssh2_scp_recv($connection, '/remote/filename', '/local/filename');
?>

   
```

## See Also

 `ssh2_scp_send()` `copy()`
