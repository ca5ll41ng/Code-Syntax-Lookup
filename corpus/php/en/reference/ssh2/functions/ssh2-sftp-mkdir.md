---
id: "en-php-function-function-ssh2-sftp-mkdir"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_mkdir"
title: "Create a directory"
signature: "bool ssh2_sftp_mkdir(resource $sftp, string $dirname, int $mode = 0777, bool $recursive = false)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-mkdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a directory

## Description

```php
bool ssh2_sftp_mkdir(resource $sftp, string $dirname, int $mode = 0777, bool $recursive = false)
```

Creates a directory on the remote file server with permissions set to `$mode`.

This function is similar to using `mkdir()` with the ssh2.sftp:// wrapper.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$dirname`** — Path of the new directory.
- **`$mode`** — Permissions on the new directory. The actual mode is affected by the current umask.
- **`$recursive`** — If `$recursive` is `true` any parent directories required for `$dirname` will be automatically created as well.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Creating a directory on a remote server**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_mkdir($sftp, '/home/username/newdir');
/* Or:  mkdir("ssh2.sftp://$sftp/home/username/newdir"); */
?>

   
```

## See Also

 `mkdir()` `ssh2_sftp_rmdir()`
