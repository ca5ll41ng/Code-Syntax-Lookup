---
id: "en-php-function-function-ssh2-sftp-unlink"
language: "php"
lang: "en"
category: "function"
name: "ssh2_sftp_unlink"
title: "Delete a file"
signature: "bool ssh2_sftp_unlink(resource $sftp, string $filename)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-sftp-unlink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a file

## Description

```php
bool ssh2_sftp_unlink(resource $sftp, string $filename)
```

Deletes a file on the remote filesystem.

## Parameters

- **`$sftp`** — An SSH2 SFTP resource opened by `ssh2_sftp()`.
- **`$filename`**

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Deleting a file**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_unlink($sftp, '/home/username/stale_file');
?>

   
```

## See Also

 `unlink()`
