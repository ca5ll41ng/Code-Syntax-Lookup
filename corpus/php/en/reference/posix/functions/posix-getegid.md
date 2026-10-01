---
id: "en-php-function-function-posix-getegid"
language: "php"
lang: "en"
category: "function"
name: "posix_getegid"
title: "Return the effective group ID of the current process"
signature: "int posix_getegid()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getegid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the effective group ID of the current process

## Description

```php
int posix_getegid()
```

Return the numeric effective group ID of the current process.

## Parameters

This function has no parameters.

## Return Values

Returns an `int` of the effective group ID.

## Examples

**`posix_getegid()` example**

This example will print out the effective group id, once it is changed with `posix_setegid()`.

```php


<?php
echo 'My real group id is '.posix_getgid(); //20
posix_setegid(40);
echo 'My real group id is '.posix_getgid(); //20
echo 'My effective group id is '.posix_getegid(); //40
?>

    
```

## Notes

`posix_getegid()` is different than `posix_getgid()` because effective group ID can be changed by a calling process using `posix_setegid()`.

## See Also

`posix_getgrgid()` `posix_getgid()` `posix_setgid()`
