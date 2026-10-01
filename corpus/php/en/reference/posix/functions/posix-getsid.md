---
id: "en-php-function-function-posix-getsid"
language: "php"
lang: "en"
category: "function"
name: "posix_getsid"
title: "Get the current sid of the process"
signature: "int|false posix_getsid(int $process_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getsid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the current sid of the process

## Description

```php
int|false posix_getsid(int $process_id)
```

Return the session id of the process `$process_id`. The session id of a process is the process group id of the session leader.

## Parameters

- **`$process_id`** — The process identifier. If set to 0, the current process is assumed. If an invalid `$process_id` is specified, then `false` is returned and an error is set which can be checked with `posix_get_last_error()`.

## Return Values

Returns the identifier, as an `int`, or `false` on failure.

## Examples

**Example use of `posix_getsid()`**

```php


<?php
$pid = posix_getpid();
echo posix_getsid($pid); //8805
?>

    
```

## See Also

`posix_getpgid()` `posix_setsid()` POSIX man page GETSID(2)
