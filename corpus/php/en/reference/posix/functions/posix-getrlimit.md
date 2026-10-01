---
id: "en-php-function-function-posix-getrlimit"
language: "php"
lang: "en"
category: "function"
name: "posix_getrlimit"
title: "Return info about system resource limits"
signature: "array|false posix_getrlimit(int|null $resource = null)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-getrlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return info about system resource limits

## Description

```php
array|false posix_getrlimit(int|null $resource = null)
```

`posix_getrlimit()` returns an `array` of information about the current resource's soft and hard limits.

Each resource has an associated soft and hard limit. The soft limit is the value that the kernel enforces for the corresponding resource. The hard limit acts as a ceiling for the soft limit. An unprivileged process may only set its soft limit to a value from 0 to the hard limit, and irreversibly lower its hard limit.

## Parameters

- **`$resource`** — If `null`, all current resource limits will be returned. Otherwise, specify the resource limit constant to retrieve a specific limit.

## Return Values

Returns an associative `array` of elements for each limit that is defined. Each limit has a soft and a hard limit.

| Limit name | Limit description |
| --- | --- |
| core | The maximum size of the core file. When 0, not core files are created. When core files are larger than this size, they will be truncated at this size. |
| totalmem | The maximum size of the memory of the process, in bytes. |
| virtualmem | The maximum size of the virtual memory for the process, in bytes. |
| data | The maximum size of the data segment for the process, in bytes. |
| stack | The maximum size of the process stack, in bytes. |
| rss | The maximum number of virtual pages resident in RAM |
| maxproc | The maximum number of processes that can be created for the real user ID of the calling process. |
| memlock | The maximum number of bytes of memory that may be locked into RAM. |
| cpu | The amount of time the process is allowed to use the CPU. |
| filesize | The maximum size of the data segment for the process, in bytes. |
| openfiles | One more than the maximum number of open file descriptors. |

The function returns `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0 | The optional `$resource` parameter has been added. |

## Examples

**Example use of `posix_getrlimit()`**

```php


<?php

$limits = posix_getrlimit();

print_r($limits);
?>

    
```

The above example will output something similar to:

```text


Array
(
    [soft core] => 0
    [hard core] => unlimited
    [soft data] => unlimited
    [hard data] => unlimited
    [soft stack] => 8388608
    [hard stack] => unlimited
    [soft totalmem] => unlimited
    [hard totalmem] => unlimited
    [soft rss] => unlimited
    [hard rss] => unlimited
    [soft maxproc] => unlimited
    [hard maxproc] => unlimited
    [soft memlock] => unlimited
    [hard memlock] => unlimited
    [soft cpu] => unlimited
    [hard cpu] => unlimited
    [soft filesize] => unlimited
    [hard filesize] => unlimited
    [soft openfiles] => 1024
    [hard openfiles] => 1024
)

    
```

## See Also

man page GETRLIMIT(2) `posix_setrlimit()`
