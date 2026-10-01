---
id: "en-php-function-function-posix-times"
language: "php"
lang: "en"
category: "function"
name: "posix_times"
title: "Get process times"
signature: "array|false posix_times()"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-times.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get process times

## Description

```php
array|false posix_times()
```

Gets information about the current CPU usage.

## Parameters

This function has no parameters.

## Return Values

Returns a hash of strings with information about the current process CPU usage. The indices of the hash are:

- ticks - the number of clock ticks that have elapsed since reboot.
- utime - user time used by the current process.
- stime - system time used by the current process.
- cutime - user time used by current process and children.
- cstime - system time used by current process and children.

The function returns `false` on failure.

## Examples

**Example use of `posix_times()`**

```php


<?php

$times = posix_times();

print_r($times);
?>

    
```

The above example will output something similar to:

```text


Array
(
    [ticks] => 25814410
    [utime] => 1
    [stime] => 1
    [cutime] => 0
    [cstime] => 0
)

    
```

## Notes

> This function isn't reliable to use, it may return negative values for high times.
