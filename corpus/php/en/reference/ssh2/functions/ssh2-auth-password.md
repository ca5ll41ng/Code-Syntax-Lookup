---
id: "en-php-function-function-ssh2-auth-password"
language: "php"
lang: "en"
category: "function"
name: "ssh2_auth_password"
title: "Authenticate over SSH using a plain password"
signature: "bool ssh2_auth_password(resource $session, string $username, string $password)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-auth-password.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticate over SSH using a plain password

## Description

```php
bool ssh2_auth_password(resource $session, string $username, string $password)
```

Authenticate over SSH using a plain password. Since version 0.12 this function also supports keyboard_interactive method.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$username`** — Remote user name.
- **`$password`** — Password for `$username`

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Authenticating with a password**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);

if (ssh2_auth_password($connection, 'username', 'secret')) {
  echo "Authentication Successful!\n";
} else {
  die('Authentication Failed...');
}
?>

   
```
