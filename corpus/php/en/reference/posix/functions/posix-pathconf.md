---
id: "en-php-function-function-posix-pathconf"
language: "php"
lang: "en"
category: "function"
name: "posix_pathconf"
title: "Returns the value of a configurable limit"
signature: "int|false posix_pathconf(string $path, int $name)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-pathconf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of a configurable limit

## Description

```php
int|false posix_pathconf(string $path, int $name)
```

> This function is currently not documented; only its argument list is available.

Returns the value of a configurable limit from `$name` for a `$path`

## Parameters

- **`$path`** — The name of the file whose limit you want to get.
- **`$name`** — The name of the configurable limit, one of the following. `POSIX_PC_LINK_MAX`, `POSIX_PC_MAX_CANON`, `POSIX_PC_MAX_INPUT`, `POSIX_PC_NAME_MAX`, `POSIX_PC_PATH_MAX`, `POSIX_PC_PIPE_BUF`, `POSIX_PC_CHOWN_RESTRICTED`, `POSIX_PC_NO_TRUNC`, `POSIX_PC_ALLOC_SIZE_MIN`, `POSIX_PC_SYMLINK_MAX`.

## Return Values

Returns the configurable limit or `false`.

## Errors/Exceptions

Throws a `ValueError` when `$path` is empty.

## Examples

**`posix_pathconf()` example**

This example will get the max path name's length in bytes for the tmp dir.

```php


<?php
echo posix_pathconf(sys_get_temp_dir(), POSIX_PC_PATH_MAX);
?>

   
```

The above example will output:

```text


4096

   
```

## See Also

 `posix_fpathconf()`
