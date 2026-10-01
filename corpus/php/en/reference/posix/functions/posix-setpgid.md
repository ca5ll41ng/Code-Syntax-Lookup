---
id: "en-php-function-function-posix-setpgid"
language: "php"
lang: "en"
category: "function"
name: "posix_setpgid"
title: "Set process group id for job control"
signature: "bool posix_setpgid(int $process_id, int $process_group_id)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-setpgid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set process group id for job control

## Description

```php
bool posix_setpgid(int $process_id, int $process_group_id)
```

Let the process `$process_id` join the process group `$process_group_id`.

## Parameters

- **`$process_id`** — The process id.
- **`$process_group_id`** — The process group id.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError when `$process_id` or `$process_group_id` is lower than zero or greater than what the platform supports. |

## See Also

See POSIX.1 and the setsid(2) manual page on the POSIX system for more information on process groups and job control.
