---
id: "en-php-function-function-ssh2-sftp-readlink"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_readlink"
title: "Return the target of a symbolic link"
signature: "string|false ssh2_sftp_readlink(resource $sftp, string $link)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-readlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the target of a symbolic link

## Description

```php
string|false ssh2_sftp_readlink(resource $sftp, string $link)
```

Returns the target of a symbolic link.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$link`** — Path of the symbolic link.

## Return Values

Returns the target of the symbolic `$link` or `false` on failure.

## Examples

**Reading a symbolic link**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

$target = ssh2_sftp_readlink($sftp, '/tmp/mysql.sock');
/* $target is now (e.g.): '/var/run/mysql.sock' */
?>

   
```

## See Also

 `readlink()` `ssh2_sftp_symlink()`
