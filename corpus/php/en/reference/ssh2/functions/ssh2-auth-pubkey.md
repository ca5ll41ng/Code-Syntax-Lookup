---
id: "en-php-function-function-ssh2-auth-pubkey"
language: "php"
lang: "en"
category: "function"
name: "ssh2_auth_pubkey"
title: "Authenticate using a public key in a variable"
signature: "bool ssh2_auth_pubkey(resource $session, string $username, string $pubkey, string $privkey, [string $passphrase = ...])"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-auth-pubkey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticate using a public key in a variable

## Description

```php
bool ssh2_auth_pubkey(resource $session, string $username, string $pubkey, string $privkey, [string $passphrase = ...])
```

Authenticate using a public key in a variable.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$username`** — Name of the user to authenticate as on the remote server.
- **`$pubkey`** — Public key in OpenSSH's format. It should look something like: `ssh-rsa AAAAB3NzaC1yc2EAAA....NX6sqSnHA8= rsa-key-20121110`
- **`$privkey`** — Private OpenSSH key. It should begin with: `-----BEGIN RSA PRIVATE KEY-----`
- **`$passphrase`** — If `$privkey` is encrypted (which it should be), the `$passphrase` must be provided.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Authentication using a public key**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22, array('hostkey'=>'ssh-rsa'));
$publicKey = file_get_contents('/home/username/.ssh/id_rsa.pub');
$privateKey = file_get_contents('/home/username/.ssh/id_rsa');

if (ssh2_auth_pubkey($connection, 'username',
                     $publicKey,
                     $privateKey, 'secret')) {
  echo "Public Key Authentication Successful\n";
} else {
  die('Public Key Authentication Failed');
}
?>

   
```

## Notes

> The underlying libssh2 library doesn't support partial auths very cleanly. That is, if you need to supply both a public key and a password it will appear as if this function has failed. In this particular case a failure from this call may just mean that auth hasn't been completed yet. You would need to ignore this failure and continue on and call `ssh2_auth_password()` in order to complete authentication.

## See Also

 `ssh2_auth_pubkey_file()`
