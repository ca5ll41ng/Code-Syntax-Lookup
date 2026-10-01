---
id: "en-php-function-function-ssh2-auth-hostbased-file"
language: "php"
lang: "en"
category: "function"
name: "ssh2_auth_hostbased_file"
title: "Authenticate using a public hostkey"
signature: "bool ssh2_auth_hostbased_file(resource $session, string $username, string $hostname, string $pubkeyfile, string $privkeyfile, [string $passphrase = ...], [string $local_username = ...])"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-auth-hostbased-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticate using a public hostkey

## Description

```php
bool ssh2_auth_hostbased_file(resource $session, string $username, string $hostname, string $pubkeyfile, string $privkeyfile, [string $passphrase = ...], [string $local_username = ...])
```

Authenticate using a public hostkey read from a file.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$username`**
- **`$hostname`**
- **`$pubkeyfile`**
- **`$privkeyfile`**
- **`$passphrase`** — If `$privkeyfile` is encrypted (which it should be), the passphrase must be provided.
- **`$local_username`** — If `$local_username` is omitted, then the value for `$username` will be used for it.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Authentication using a public hostkey**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22, array('hostkey'=>'ssh-rsa'));

if (ssh2_auth_hostbased_file($connection, 'remoteusername', 'myhost.example.com',
                             '/usr/local/etc/hostkey_rsa.pub',
                             '/usr/local/etc/hostkey_rsa', 'secret',
                             'localusername')) {
  echo "Public Key Hostbased Authentication Successful\n";
} else {
  die('Public Key Hostbased Authentication Failed');
}
?>

   
```

## Notes

> `ssh2_auth_hostbased_file()` requires libssh2 >= 0.7 and PHP/SSH2 >= 0.7
