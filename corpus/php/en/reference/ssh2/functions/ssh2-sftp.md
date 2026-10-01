---
id: "en-php-function-function-ssh2-sftp"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp"
title: "Initialize SFTP subsystem"
signature: "resource|false ssh2_sftp(resource $session)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Initialize SFTP subsystem

## Description

```php
resource|false ssh2_sftp(resource $session)
```

Request the SFTP subsystem from an already connected SSH2 server.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.

## Return Values

This method returns an `SSH2 SFTP` resource for use with all other ssh2_sftp_*() methods and the ssh2.sftp:// fopen wrapper, or `false` on failure.

## Examples

**Opening a file via SFTP**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$sftp = ssh2_sftp($connection);

$stream = fopen('ssh2.sftp://' . intval($sftp) . '/path/to/file', 'r');
?>

   
```

## See Also

 `ssh2_scp_recv()` `ssh2_scp_send()`
