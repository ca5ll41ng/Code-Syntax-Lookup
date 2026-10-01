---
id: "en-php-function-function-ssh2-sftp-stat"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_stat"
title: "Stat a file on a remote filesystem"
signature: "array|false ssh2_sftp_stat(resource $sftp, string $path)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-stat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stat a file on a remote filesystem

## Description

```php
array|false ssh2_sftp_stat(resource $sftp, string $path)
```

Stats a file on the remote filesystem following any symbolic links.

This function is similar to using the `stat()` function with the ssh2.sftp:// wrapper and returns the same values.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$path`**

## Return Values

Returns an array of statistics for the given file on success or `false` on failure. See the documentation for `stat()` for details on the values which may be returned.

## Examples

**Stating a file via SFTP**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$sftp = ssh2_sftp($connection);
$statinfo = ssh2_sftp_stat($sftp, '/path/to/file');

$filesize = $statinfo['size'];
$group = $statinfo['gid'];
$owner = $statinfo['uid'];
$atime = $statinfo['atime'];
$mtime = $statinfo['mtime'];
$mode = $statinfo['mode'];
?>

   
```

## See Also

 `ssh2_sftp_lstat()` `lstat()` `stat()`
