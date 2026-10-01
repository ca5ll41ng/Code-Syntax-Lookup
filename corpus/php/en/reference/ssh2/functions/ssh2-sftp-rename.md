---
id: "en-php-function-function-ssh2-sftp-rename"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_rename"
title: "Rename a remote file"
signature: "bool ssh2_sftp_rename(resource $sftp, string $from, string $to)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-rename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rename a remote file

## Description

```php
bool ssh2_sftp_rename(resource $sftp, string $from, string $to)
```

Renames a file on the remote filesystem.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$from`** — The current file that is being renamed.
- **`$to`** — The new file name that replaces `$from`.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Renaming a file via sftp**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_rename($sftp, '/home/username/oldname', '/home/username/newname');
?>

   
```

## See Also

 `rename()`
