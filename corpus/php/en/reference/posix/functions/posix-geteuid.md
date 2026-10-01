---
id: "en-php-function-function-posix-geteuid"
language: "php"
lang: "en"
category: "function"
name: "posix_geteuid"
title: "Return the effective user ID of the current process"
signature: "int posix_geteuid()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-geteuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the effective user ID of the current process

## Description

```php
int posix_geteuid()
```

Return the numeric effective user ID of the current process. See also `posix_getpwuid()` for information on how to convert this into a usable username.

## Parameters

This function has no parameters.

## Return Values

Returns the user id, as an `int`

## Examples

**`posix_geteuid()` example**

This example will show the current user id then set the effective user id to a separate id using `posix_seteuid()`, then show the difference between the real id and the effective id.

```php


<?php
echo posix_getuid()."\n"; //10001
echo posix_geteuid()."\n"; //10001
posix_seteuid(10000);
echo posix_getuid()."\n"; //10001
echo posix_geteuid()."\n"; //10000
?>

    
```

## See Also

`posix_getpwuid()` `posix_getuid()` `posix_setuid()` POSIX man page GETEUID(2)
