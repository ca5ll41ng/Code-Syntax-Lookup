---
id: "en-php-function-function-ssh2-auth-none"
language: "php"
lang: "en"
category: "function"
name: "ssh2_auth_none"
title: "Authenticate as \"none\""
signature: "mixed ssh2_auth_none(resource $session, string $username)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-auth-none.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticate as "none"

## Description

```php
mixed ssh2_auth_none(resource $session, string $username)
```

Attempt "none" authentication which usually will (and should) fail. As part of the failure, this function will return an array of accepted authentication methods.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$username`** — Remote user name.

## Return Values

Returns `true` if the server does accept "none" as an authentication method, or an array of accepted authentication methods on failure.

## Examples

**Retrieving a list of authentication methods**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);

$auth_methods = ssh2_auth_none($connection, 'user');

if (in_array('password', $auth_methods)) {
  echo "Server supports password based authentication\n";
}
?>

   
```
