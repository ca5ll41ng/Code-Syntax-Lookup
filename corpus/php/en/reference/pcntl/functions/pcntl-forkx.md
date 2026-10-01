---
id: "en-php-function-function-pcntl-forkx"
language: "php"
lang: "en"
category: "function"
name: "pcntl_forkx"
title: "Create a child process using forkx(2)"
signature: "int pcntl_forkx(int $flags)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-forkx.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a child process using forkx(2)

## Description

```php
int pcntl_forkx(int $flags)
```

The `pcntl_forkx()` function creates a child process using the `forkx(2)` system call, which is available on illumos and Solaris systems.

## Parameters

- **`$flags`** — The `$flags` parameter controls the behavior of the fork. Pass `0` for default behavior or `FORK_NOSIGCHLD` to prevent the `SIGCHLD` signal from being sent to the parent when the child terminates.

## Return Values

On success, the PID of the child process is returned in the parent's thread of execution, and a `0` is returned in the child's thread of execution. On failure, a `-1` will be returned in the parent's context, no child process will be created, and a PHP error is raised.

## See Also

 `pcntl_fork()` `pcntl_rfork()` `pcntl_waitpid()`
