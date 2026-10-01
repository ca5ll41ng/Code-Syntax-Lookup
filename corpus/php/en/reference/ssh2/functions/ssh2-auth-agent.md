---
id: "en-php-function-function-ssh2-auth-agent"
language: "php"
lang: "en"
category: "function"
name: "ssh2_auth_agent"
title: "Authenticate over SSH using the ssh agent"
signature: "bool ssh2_auth_agent(resource $session, string $username)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-auth-agent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Authenticate over SSH using the ssh agent

## Description

```php
bool ssh2_auth_agent(resource $session, string $username)
```

Authenticate over SSH using the ssh agent

> The `ssh2_auth_agent()` function will only be available when the ssh2 extension is compiled with libssh2 >= 1.2.3.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$username`** — Remote user name.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Authenticating with a ssh agent**

```php


<?php
$connection = ssh2_connect('shell.example.com', 22);

if (ssh2_auth_agent($connection, 'username')) {
  echo "Authentication Successful!\n";
} else {
  die('Authentication Failed...');
}
?>

   
```
