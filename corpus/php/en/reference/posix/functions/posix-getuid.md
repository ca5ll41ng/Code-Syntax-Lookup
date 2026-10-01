---
id: "en-php-function-function-posix-getuid"
language: "php"
lang: "en"
category: "function"
name: "posix_getuid"
title: "Return the real user ID of the current process"
signature: "int posix_getuid()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getuid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the real user ID of the current process

## Description

```php
int posix_getuid()
```

Return the numeric real user ID of the current process.

## Parameters

This function has no parameters.

## Return Values

Returns the user id, as an `int`

## Examples

**Example use of `posix_getuid()`**

```php


<?php
echo posix_getuid(); //10000
?>

    
```

## See Also

`posix_getpwuid()` POSIX man page GETUID(2)
