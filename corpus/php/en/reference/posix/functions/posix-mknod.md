---
id: "en-php-function-function-posix-mknod"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "posix_mknod"
title: "Create a special or ordinary file (POSIX.1)"
signature: "bool posix_mknod(string $filename, int $flags, int $major = 0, int $minor = 0)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-mknod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a special or ordinary file (POSIX.1)

## Description

```php
bool posix_mknod(string $filename, int $flags, int $major = 0, int $minor = 0)
```

Creates a special or ordinary file.

## Parameters

- **`$filename`** — The file to create
- **`$flags`** — This parameter is constructed by a bitwise OR between file type (one of the following constants: `POSIX_S_IFREG`, `POSIX_S_IFCHR`, `POSIX_S_IFBLK`, `POSIX_S_IFIFO` or `POSIX_S_IFSOCK`) and permissions.
- **`$major`** — The major device kernel identifier (required to pass when using `S_IFCHR` or `S_IFBLK`).
- **`$minor`** — The minor device kernel identifier.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**A `posix_mknod()` example**

```php


<?php

$file = '/tmp/tmpfile';  // file name
$type = POSIX_S_IFBLK;   // file type
$permissions = 0777;     // octal
$major = 1;
$minor = 8;              // /dev/random

if (!posix_mknod($file, $type | $permissions, $major, $minor)) {
    die('Error ' . posix_get_last_error() . ': ' . posix_strerror(posix_get_last_error()));
}

?>

    
```

## See Also

`posix_mkfifo()`
