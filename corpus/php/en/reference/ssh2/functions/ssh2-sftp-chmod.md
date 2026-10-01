---
id: "en-php-function-function-ssh2-sftp-chmod"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_chmod"
title: "Changes file mode"
signature: "bool ssh2_sftp_chmod(resource $sftp, string $filename, int $mode)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-chmod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes file mode

## Description

```php
bool ssh2_sftp_chmod(resource $sftp, string $filename, int $mode)
```

Attempts to change the mode of the specified file to that given in `$mode`.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$filename`** — Path to the file.
- **`$mode`** — Permissions on the file. See the `chmod()` for more details on this parameter.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Changing the mode of a file on a remote server**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_chmod($sftp, '/somedir/somefile', 0755);
?>

   
```

## See Also

 `chmod()` `ssh2_sftp()` `ssh2_connect()`
