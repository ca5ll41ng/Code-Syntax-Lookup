---
id: "en-php-function-function-posix-getgid"
language: "php"
lang: "en"
category: "function"
name: "posix_getgid"
title: "Return the real group ID of the current process"
signature: "int posix_getgid()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getgid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the real group ID of the current process

## Description

```php
int posix_getgid()
```

Return the numeric real group ID of the current process.

## Parameters

This function has no parameters.

## Return Values

Returns the real group id, as an `int`.

## Examples

**`posix_getgid()` example**

This example will print out the real group id, even once the effective group id has been changed.

```php


<?php
echo 'My real group id is '.posix_getgid(); //20
posix_setegid(40);
echo 'My real group id is '.posix_getgid(); //20
echo 'My effective group id is '.posix_getegid(); //40
?>

    
```

## See Also

`posix_getgrgid()` `posix_getegid()` `posix_setgid()` POSIX man page GETGID(2)
