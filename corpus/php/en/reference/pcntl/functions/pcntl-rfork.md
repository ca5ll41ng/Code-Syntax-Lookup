---
id: "en-php-function-function-pcntl-rfork"
language: "php"
lang: "en"
category: "function"
name: "pcntl_rfork"
title: "Manipulates process resources"
signature: "int pcntl_rfork(int $flags, int $signal = 0)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-rfork.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Manipulates process resources

## Description

```php
int pcntl_rfork(int $flags, int $signal = 0)
```

Manipulates process resources.

## Parameters

- **`$flags`** — The `$flags` parameter determines which resources of the invoking process (parent) are shared by the new process (child) or initialized to their default values. — `$flags` is the logical OR of some subset of: `RFPROC`: If set a new process is created; otherwise changes affect the current process. `RFNOWAIT`: If set, the child process will be dissociated from the parent. Upon exit the child will not leave a status for the parent to collect. `RFFDG`: If set, the invoker's file descriptor table is copied; otherwise the two processes share a single table. `RFCFDG`: If set, the new process starts with a clean file descriptor table. Is mutually exclusive with `RFFDG`. `RFLINUXTHPN`: If set, the kernel will return SIGUSR1 instead of SIGCHLD upon thread exit for the child. This is intended to do Linux clone exit parent notification. `RFTSIGZMB`: If set, the kernel will deliver the signal specified by the `$signal` parameter to the parent upon the child exit, instead of the default SIGCHLD. Specifying signal number 0 disables signal delivery upon the child exit. `RFTHREAD`: If set, the new process shares file descriptor to process leaders table with its parent. Only applies when neither `RFFDG` nor `RFCFDG` are set.
- **`$signal`** — The signal number to deliver to the parent when the child exits. This is only used when the `RFTSIGZMB` flag is set. Specifying `0` disables signal delivery upon the child exit.

## Return Values

On success, the PID of the child process is returned in the parent's thread of execution, and a `0` is returned in the child's thread of execution. On failure, a `-1` will be returned in the parent's context, no child process will be created, and a PHP error is raised.

## Examples

**`pcntl_rfork()` example**

```php


<?php

$pid = pcntl_rfork(RFNOWAIT|RFTSIGZMB, SIGUSR1);
if ($pid > 0) {
  // This is the parent process.
  var_dump($pid);
} else {
  // This is the child process.
  var_dump($pid);
  sleep(2); // as the child does not wait, so we see its "pid"
}
?>

    
```

The above example will output something similar to:

```text


int(77093)
int(0)

    
```

## Notes

> This function is only available on BSD systems.

## See Also

`pcntl_fork()` `pcntl_waitpid()` `pcntl_signal()` `cli_set_process_title()`
