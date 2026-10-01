---
id: "en-php-function-function-ssh2-sftp-lstat"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_lstat"
title: "Stat a symbolic link"
signature: "array|false ssh2_sftp_lstat(resource $sftp, string $path)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-lstat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stat a symbolic link

## Description

```php
array|false ssh2_sftp_lstat(resource $sftp, string $path)
```

Stats a symbolic link on the remote filesystem *without* following the link.

This function is similar to using the `lstat()` function with the ssh2.sftp:// wrapper and returns the same values.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$path`** — Path to the remote symbolic link.

## Return Values

Returns an array of statistics for the given symbolic link on success or `false` on failure. See the documentation for `stat()` for details on the values which may be returned.

## Examples

**Stating a symbolic link via SFTP**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$sftp = ssh2_sftp($connection);
$statinfo = ssh2_sftp_lstat($sftp, '/path/to/symlink');

$filesize = $statinfo['size'];
$group = $statinfo['gid'];
$owner = $statinfo['uid'];
$atime = $statinfo['atime'];
$mtime = $statinfo['mtime'];
$mode = $statinfo['mode'];
?>

   
```

## See Also

 `ssh2_sftp_stat()` `lstat()` `stat()`
