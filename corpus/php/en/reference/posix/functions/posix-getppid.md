---
id: "en-php-function-function-posix-getppid"
language: "php"
lang: "en"
category: "function"
name: "posix_getppid"
title: "Return the parent process identifier"
signature: "int posix_getppid()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getppid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the parent process identifier

## Description

```php
int posix_getppid()
```

Return the process identifier of the parent process of the current process.

## Parameters

This function has no parameters.

## Return Values

Returns the identifier, as an `int`.

## Examples

**Example use of `posix_getppid()`**

```php


<?php
echo posix_getppid(); //8259
?>

    
```
