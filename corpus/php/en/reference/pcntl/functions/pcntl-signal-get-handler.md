---
id: "en-php-function-function-pcntl-signal-get-handler"
language: "php"
lang: "en"
category: "function"
name: "pcntl_signal_get_handler"
title: "Get the current handler for specified signal"
signature: "callable|int pcntl_signal_get_handler(int $signal)"
module: "pcntl"
source_url: "https://www.php.net/manual/en/function.pcntl-signal-get-handler.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the current handler for specified signal

## Description

```php
callable|int pcntl_signal_get_handler(int $signal)
```

The `pcntl_signal_get_handler()` function will get the current handler for the specified `$signal`.

## Parameters

- **`$signal`** — The signal number.

## Return Values

This function may return an integer value that refers to `SIG_DFL` or `SIG_IGN`. If a custom handler has been set, that `callable` is returned.

## Changelog

|  |  |
| --- | --- |
| 7.1.0 | `pcntl_signal_get_handler()` has been added. |

 }}} 

## Examples

**`pcntl_signal_get_handler()` example**

```php


<?php
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: int(0)

function pcntl_test($signo) {}
pcntl_signal(SIGUSR1, 'pcntl_test');
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: string(10) "pcntl_test"

pcntl_signal(SIGUSR1, SIG_DFL);
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: int(0)

pcntl_signal(SIGUSR1, SIG_IGN);
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: int(1)
?>

    
```

## See Also

 `pcntl_signal()`
