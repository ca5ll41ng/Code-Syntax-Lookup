---
id: "en-php-function-function-inet-ntop"
language: "php"
lang: "en"
category: "function"
name: "inet_ntop"
title: "Converts a packed internet address to a human readable representation"
signature: "string|false inet_ntop(string $ip)"
module: "network"
source_url: "https://www.php.net/manual/en/function.inet-ntop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts a packed internet address to a human readable representation

## Description

```php
string|false inet_ntop(string $ip)
```

This function converts a 32bit IPv4, or 128bit IPv6 address (if PHP was built with IPv6 support enabled) into an address family appropriate string representation.

## Parameters

- **`$ip`** — A 32bit IPv4, or 128bit IPv6 address.

## Return Values

Returns a string representation of the address or `false` on failure.

## Examples

**`inet_ntop()` Example**

```php


<?php
$packed = chr(127) . chr(0) . chr(0) . chr(1);
$expanded = inet_ntop($packed);

/* Outputs: 127.0.0.1 */
echo $expanded;

$packed = str_repeat(chr(0), 15) . chr(1);
$expanded = inet_ntop($packed);

/* Outputs: ::1 */
echo $expanded;
?>

    
```

## See Also

`long2ip()` `ip2long()` `inet_pton()`
