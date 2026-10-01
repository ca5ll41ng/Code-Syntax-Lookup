---
id: "en-php-function-function-posix-getlogin"
language: "php"
lang: "en"
category: "function"
name: "posix_getlogin"
title: "Return login name"
signature: "string|false posix_getlogin()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getlogin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return login name

## Description

```php
string|false posix_getlogin()
```

Returns the login name of the user owning the current process.

## Parameters

This function has no parameters.

## Return Values

Returns the login name of the user, as a `string`, or `false` on failure.

## Examples

**Example use of `posix_getlogin()`**

```php


<?php
echo posix_getlogin(); //apache
?>

    
```

## See Also

`posix_getpwnam()` POSIX man page GETLOGIN(3)
