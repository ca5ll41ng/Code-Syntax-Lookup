---
id: "en-php-function-function-posix-setrlimit"
language: "php"
lang: "en"
category: "function"
name: "posix_setrlimit"
title: "Set system resource limits"
signature: "bool posix_setrlimit(int $resource, int $soft_limit, int $hard_limit)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-setrlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set system resource limits

## Description

```php
bool posix_setrlimit(int $resource, int $soft_limit, int $hard_limit)
```

`posix_setrlimit()` sets the soft and hard limits for a given system resource.

Each resource has an associated soft and hard limit. The soft limit is the value that the kernel enforces for the corresponding resource. The hard limit acts as a ceiling for the soft limit. An unprivileged process may only set its soft limit to a value from 0 to the hard limit, and irreversibly lower its hard limit.

## Parameters

- **`$resource`** — The resource limit constant corresponding to the limit that is being set.
- **`$soft_limit`** — The soft limit, in whatever unit the resource limit requires, or `POSIX_RLIMIT_INFINITY`.
- **`$hard_limit`** — The hard limit, in whatever unit the resource limit requires, or `POSIX_RLIMIT_INFINITY`.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError when `$hard_limit` or `$soft_limit` is lower than -1, or when `$soft_limit` is greater than `$hard_limit`. |

## See Also

man page SETRLIMIT(2) `posix_getrlimit()`
