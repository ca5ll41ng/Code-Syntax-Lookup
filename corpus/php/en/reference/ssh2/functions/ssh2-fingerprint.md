---
id: "en-php-function-function-ssh2-fingerprint"
language: "php"
lang: "en"
category: "function"
name: "ssh2_fingerprint"
title: "Retrieve fingerprint of remote server"
signature: "string ssh2_fingerprint(resource $session, int $flags = SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX)"
module: "ssh2"
source_url: "https://www.php.net/manual/en/function.ssh2-fingerprint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve fingerprint of remote server

## Description

```php
string ssh2_fingerprint(resource $session, int $flags = SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX)
```

Returns a server hostkey hash from an active session.

## Parameters

- **`$session`** — An SSH connection link identifier, obtained from a call to `ssh2_connect()`.
- **`$flags`** — `$flags` may be either of `SSH2_FINGERPRINT_MD5` or `SSH2_FINGERPRINT_SHA1` logically ORed with `SSH2_FINGERPRINT_HEX` or `SSH2_FINGERPRINT_RAW`.

## Return Values

Returns the hostkey hash as a string.

## Examples

**Checking the fingerprint against a known value**

```php


<?php
$known_host = '6F89C2F0A719B30CC38ABDF90755F2E4';

$connection = ssh2_connect('shell.example.com', 22);

$fingerprint = ssh2_fingerprint($connection,
               SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX);

if ($fingerprint != $known_host) {
  die("HOSTKEY MISMATCH!\n" .
      "Possible Man-In-The-Middle Attack?");
}
?>

   
```
