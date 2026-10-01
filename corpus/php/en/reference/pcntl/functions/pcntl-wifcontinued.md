---
id: "en-php-function-function-pcntl-wifcontinued"
language: "php"
lang: "en"
category: "function"
name: "pcntl_wifcontinued"
title: "Checks whether the child process has continued from a job control stop"
signature: "bool pcntl_wifcontinued(int $status)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-wifcontinued.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks whether the child process has continued from a job control stop

## Description

```php
bool pcntl_wifcontinued(int $status)
```

Checks whether the child process which caused the return of `pcntl_waitpid()` has continued from a job control stop. This function is only useful if the call to `pcntl_waitpid()` was done using the `WCONTINUED` option.

## Parameters

- **`$status`** — The `$status` parameter is the status parameter supplied to a successful call to `pcntl_waitpid()`.

## Return Values

Returns `true` if the child process which caused the return of `pcntl_waitpid()` has continued from a job control stop, `false` otherwise.

## See Also

 `pcntl_waitpid()` `pcntl_wifstopped()` `pcntl_wifexited()` `pcntl_wifsignaled()`
