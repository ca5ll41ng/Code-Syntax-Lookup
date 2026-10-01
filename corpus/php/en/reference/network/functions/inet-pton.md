---
id: "en-php-function-function-inet-pton"
language: "php"
lang: "en"
category: "function"
name: "inet_pton"
title: "Converts a human readable IP address to its packed in_addr representation"
signature: "string|false inet_pton(string $ip)"
module: "network"
source_url: "https://www.php.net/manual/en/function.inet-pton.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts a human readable IP address to its packed in_addr representation

## Description

```php
string|false inet_pton(string $ip)
```

This function converts a human readable IPv4 or IPv6 address (if PHP was built with IPv6 support enabled) into an address family appropriate 32bit or 128bit binary structure.

## Parameters

- **`$ip`** — A human readable IPv4 or IPv6 address.

## Return Values

Returns the `in_addr` representation of the given `$ip`, or `false` if a syntactically invalid `$ip` is given (for example, an IPv4 address without dots or an IPv6 address without colons).

## Examples

**`inet_pton()` Example**

```php

 
<?php
$in_addr = inet_pton('127.0.0.1');
 
$in6_addr = inet_pton('::1');
?>

    
```

## See Also

`ip2long()` `long2ip()` `inet_ntop()`
