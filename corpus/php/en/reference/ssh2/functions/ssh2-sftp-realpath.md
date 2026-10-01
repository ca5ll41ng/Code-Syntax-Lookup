---
id: "en-php-function-function-ssh2-sftp-realpath"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_realpath"
title: "Resolve the realpath of a provided path string"
signature: "string|false ssh2_sftp_realpath(resource $sftp, string $filename)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-realpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resolve the realpath of a provided path string

## Description

```php
string|false ssh2_sftp_realpath(resource $sftp, string $filename)
```

Translates `$filename` into the effective real path on the remote filesystem.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$filename`**

## Return Values

Returns the real path as a string or `false` on failure.

## Examples

**Resolving a pathname**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

$realpath = ssh2_sftp_realpath($sftp, '/home/username/../../../..//./usr/../etc/passwd');
/* $realpath is now: '/etc/passwd' */
?>

   
```

## See Also

 `realpath()` `ssh2_sftp_symlink()` `ssh2_sftp_readlink()`
