---
id: "en-php-function-function-posix-strerror"
language: "php"
lang: "en"
category: "function"
name: "posix_strerror"
title: "Retrieve the system error message associated with the given errno"
signature: "string posix_strerror(int $error_code)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-strerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the system error message associated with the given errno

## Description

```php
string posix_strerror(int $error_code)
```

Returns the POSIX system error message associated with the given `$error_code`. You may get the `$error_code` parameter by calling `posix_get_last_error()`.

## Parameters

- **`$error_code`** — A POSIX error number, returned by `posix_get_last_error()`. If set to 0, then the string "Success" is returned.

## Return Values

Returns the error message, as a string.

## Examples

**`posix_strerror()` example**

This example will attempt to kill a process which does not exist, then will print out the corresponding error message.

```php


<?php
posix_kill(50,SIGKILL);
echo posix_strerror(posix_get_last_error())."\n";
?>

    
```

The above example will output something similar to:

```text


No such process

    
```

## See Also

`posix_get_last_error()`
