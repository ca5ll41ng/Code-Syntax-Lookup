---
id: "en-php-function-function-posix-fpathconf"
language: "php"
lang: "en"
category: "function"
name: "posix_fpathconf"
title: "Returns the value of a configurable limit"
signature: "int|false posix_fpathconf(resource|int $file_descriptor, int $name)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-fpathconf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of a configurable limit

## Description

```php
int|false posix_fpathconf(resource|int $file_descriptor, int $name)
```

Returns the value of a configurable limit from `$name` for `$file_descriptor`.

## Parameters

- **`$file_descriptor`** — The file descriptor, which is expected to be either a file `resource` or an `int`. An `int` will be assumed to be a file descriptor that can be passed directly to the underlying system call.
- **`$name`** — The name of the configurable limit, one of the following. `POSIX_PC_LINK_MAX`, `POSIX_PC_MAX_CANON`, `POSIX_PC_MAX_INPUT`, `POSIX_PC_NAME_MAX`, `POSIX_PC_PATH_MAX`, `POSIX_PC_PIPE_BUF`, `POSIX_PC_CHOWN_RESTRICTED`, `POSIX_PC_NO_TRUNC`, `POSIX_PC_ALLOC_SIZE_MIN`, `POSIX_PC_SYMLINK_MAX`.

## Return Values

Returns the configurable limit or `false`.

## Errors/Exceptions

Throws a `ValueError` when `$resource` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now sets `last_error` to `EBADF` and raises an `E_WARNING` when an invalid file descriptor is encountered. |

## Examples

**`posix_fpathconf()` example**

This example will get the max path name's length in bytes for the current dir.

```php


<?php
$fd = fopen(__DIR__, "r");
echo posix_fpathconf($fd, POSIX_PC_PATH_MAX);
?>

   
```

The above example will output:

```text


4096

   
```

## See Also

 `posix_pathconf()`
