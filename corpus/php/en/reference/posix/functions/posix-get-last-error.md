---
id: "en-php-function-function-posix-get-last-error"
language: "php"
lang: "en"
category: "function"
name: "posix_get_last_error"
title: "Retrieve the error number set by the last posix function that failed"
signature: "int posix_get_last_error()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-get-last-error.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the error number set by the last posix function that failed

## Description

```php
int posix_get_last_error()
```

Retrieve the error number set by the last posix function that failed. The system error message associated with the errno may be checked with `posix_strerror()`.

## Parameters

This function has no parameters.

## Return Values

Returns the errno (error number) set by the last posix function that failed. If no errors exist, 0 is returned.

## Examples

**`posix_get_last_error()` example**

This example attempt to kill a bogus process id, which will set the last error. We will then print out the last errno.

```php


<?php
posix_kill(999459,SIGKILL);
echo 'Your error returned was '.posix_get_last_error(); //Your error was ___
?>

    
```

## See Also

`posix_strerror()`
