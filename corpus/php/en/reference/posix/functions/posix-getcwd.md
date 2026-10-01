---
id: "en-php-function-function-posix-getcwd"
language: "php"
lang: "en"
category: "function"
name: "posix_getcwd"
title: "Pathname of current directory"
signature: "string|false posix_getcwd()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getcwd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pathname of current directory

## Description

```php
string|false posix_getcwd()
```

Gets the absolute pathname of the script's current working directory. On error, it sets errno which can be checked using `posix_get_last_error()`

## Parameters

This function has no parameters.

## Return Values

Returns a `string` of the absolute pathname on success. On error, returns `false` and sets errno which can be checked with `posix_get_last_error()`.

## Examples

**`posix_getcwd()` example**

This example will return the absolute path of the current working directory of the script.

```php


<?php
echo 'My current working directory is '.posix_getcwd();
?>

    
```

## Notes

> This function can fail on
>
> - Read or Search permission was denied
> - Pathname no longer exists
