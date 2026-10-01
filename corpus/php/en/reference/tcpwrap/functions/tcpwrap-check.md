---
id: "en-php-function-function-tcpwrap-check"
language: "php"
lang: "en"
category: "function"
name: "tcpwrap_check"
title: "Performs a tcpwrap check"
signature: "bool tcpwrap_check(string $daemon, string $address, [string $user = ...], bool $nodns = false)"
module: "tcpwrap"
source_url: "https://www.php.net/manual/en/function.tcpwrap-check.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs a tcpwrap check

## Description

```php
bool tcpwrap_check(string $daemon, string $address, [string $user = ...], bool $nodns = false)
```

This function consults the `/etc/hosts.allow` and `/etc/hosts.deny` files to check if access to service `$daemon` should be granted or denied for a client.

## Parameters

- **`$daemon`** — The service name.
- **`$address`** — The client remote address. Can be either an IP address or a domain name.
- **`$user`** — An optional user name.
- **`$nodns`** — If `$address` looks like domain name then DNS is used to resolve it to IP address; set `$nodns` to `true` to avoid this.

## Return Values

This function returns `true` if access should be granted, `false` otherwise.

## Examples

**Deny all connections from localhost**

If your `/etc/hosts.deny` file contains:

```text


php: 127.0.0.1

   
```

And your code looks like:

```php


<?php
if (!tcpwrap_check('php', $_SERVER['REMOTE_ADDR'])) {
  die('You are not welcome here');
}
?>

   
```

## See Also

For more details please consult hosts_access(3) man page.
