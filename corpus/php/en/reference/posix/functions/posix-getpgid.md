---
id: "en-php-function-function-posix-getpgid"
language: "php"
lang: "en"
category: "function"
name: "posix_getpgid"
title: "Get process group id for job control"
signature: "int|false posix_getpgid(int $process_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getpgid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get process group id for job control

## Description

```php
int|false posix_getpgid(int $process_id)
```

Returns the process group identifier of the process `$process_id` or `false` on failure.

## Parameters

- **`$process_id`** — The process id.

## Return Values

Returns the identifier, as an `int`.

## Examples

**Example use of `posix_getpgid()`**

```php


<?php
$pid = posix_getppid();
echo posix_getpgid($pid); //35
?>

    
```

## Notes

> This is a not POSIX function, but is common on BSD and System V systems. If the system does not support this function, then it will not be included at compile time. This may be checked with `function_exists()`.

## See Also

`posix_getppid()` man page SETPGID(2)
