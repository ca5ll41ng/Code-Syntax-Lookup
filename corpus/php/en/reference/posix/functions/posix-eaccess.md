---
id: "en-php-function-function-posix-eaccess"
language: "php"
lang: "en"
category: "function"
name: "posix_eaccess"
title: "Determine accessibility of a file"
signature: "bool posix_eaccess(string $filename, int $flags = 0)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-eaccess.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine accessibility of a file

## Description

```php
bool posix_eaccess(string $filename, int $flags = 0)
```

`posix_eaccess()` checks the effective user's permission of a file

## Parameters

- **`$filename`** — The name of a file to be tested.
- **`$flags`** — A mask consisting of one or more of `POSIX_F_OK`, `POSIX_R_OK`, `POSIX_W_OK` and `POSIX_X_OK`. — `POSIX_R_OK`, `POSIX_W_OK` and `POSIX_X_OK` request checking whether the file exists and has read, write and execute permissions, respectively. `POSIX_F_OK` just requests checking for the existence of the file.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | Checks the effective user/group for a file, differing from `posix_access()` which checks from the real user/group. |

## Examples

**`posix_eaccess()` example**

This example will check if the $file is readable and writable, otherwise will print an error message.

```php


<?php

$file = 'some_file';

if (posix_eaccess($file, POSIX_R_OK | POSIX_W_OK)) {
    echo 'The file is readable and writable!';

} else {
    $error = posix_get_last_error();

    echo "Error $error: " . posix_strerror($error);
}

?>

     
```

## See Also

`posix_get_last_error()` `posix_strerror()` `posix_access()`
