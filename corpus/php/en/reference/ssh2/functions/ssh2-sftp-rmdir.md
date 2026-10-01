---
id: "en-php-function-function-ssh2-sftp-rmdir"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_rmdir"
title: "Remove a directory"
signature: "bool ssh2_sftp_rmdir(resource $sftp, string $dirname)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-rmdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a directory

## Description

```php
bool ssh2_sftp_rmdir(resource $sftp, string $dirname)
```

Removes a directory from the remote file server.

This function is similar to using `rmdir()` with the ssh2.sftp:// wrapper.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$dirname`**

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Removing a directory on a remote server**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_rmdir($sftp, '/home/username/deltodel');
/* Or:  rmdir("ssh2.sftp://$sftp/home/username/dirtodel"); */
?>

   
```

## See Also

 `rmdir()` `ssh2_sftp_mkdir()`
