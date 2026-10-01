---
id: "en-php-function-function-posix-kill"
language: "php"
lang: "en"
category: "function"
name: "posix_kill"
title: "Send a signal to a process"
signature: "bool posix_kill(int $process_id, int $signal)"
module: "posix"
source_url: "https://www.php.net/manual/en/function.posix-kill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send a signal to a process

## Description

```php
bool posix_kill(int $process_id, int $signal)
```

Send the signal `$signal` to the process with the process identifier `$process_id`.

## Parameters

- **`$process_id`** — The process identifier.
- **`$signal`** — One of the PCNTL signals constants.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Now throws a ValueError when `$process_id` is lower or greater than what the platform supports (signed integer or long range). |

## See Also

The kill(2) manual page of the POSIX system, which contains additional information about negative process identifiers, the special pid 0, the special pid -1, and the signal number 0.
