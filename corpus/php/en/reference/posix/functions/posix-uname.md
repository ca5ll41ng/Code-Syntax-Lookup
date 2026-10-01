---
id: "en-php-function-function-posix-uname"
language: "php"
lang: "en"
category: "function"
name: "posix_uname"
title: "Get system name"
signature: "array|false posix_uname()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-uname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get system name

## Description

```php
array|false posix_uname()
```

Gets information about the system.

Posix requires that assumptions must not be made about the format of the values, e.g. the assumption that a release may contain three digits or anything else returned by this function.

## Parameters

This function has no parameters.

## Return Values

Returns a hash of strings with information about the system. The indices of the hash are

- sysname - operating system name (e.g. Linux)
- nodename - system name (e.g. valiant)
- release - operating system release (e.g. 2.2.10)
- version - operating system version (e.g. #4 Tue Jul 20 17:01:36 MEST 1999)
- machine - system architecture (e.g. i586)
- domainname - DNS domainname (e.g. example.com)

domainname is a GNU extension and not part of POSIX.1, so this field is only available on GNU systems or when using the GNU libc.

The function returns `false` on failure.

## Examples

**Example use of `posix_uname()`**

```php


<?php
$uname=posix_uname();
print_r($uname);
?>

    
```

The above example will output something similar to:

```text


Array
(
    [sysname] => Linux
    [nodename] => funbox
    [release] => 2.6.20-15-server
    [version] => #2 SMP Sun Apr 15 07:41:34 UTC 2007
    [machine] => i686
)

    
```
