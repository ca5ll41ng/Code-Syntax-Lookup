---
id: "en-php-function-function-ssh2-sftp-symlink"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_symlink"
title: "Create a symlink"
signature: "bool ssh2_sftp_symlink(resource $sftp, string $target, string $link)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-symlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a symlink

## Description

```php
bool ssh2_sftp_symlink(resource $sftp, string $target, string $link)
```

Creates a symbolic link named `$link` on the remote filesystem pointing to `$target`.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$target`** — Target of the symbolic link.
- **`$link`**

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Creating a symbolic link**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_symlink($sftp, '/var/run/mysql.sock', '/tmp/mysql.sock');
?>

   
```

## See Also

 `ssh2_sftp_readlink()` `symlink()`
