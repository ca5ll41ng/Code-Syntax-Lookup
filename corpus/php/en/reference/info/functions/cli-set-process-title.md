---
id: "en-php-function-function-cli-set-process-title"
language: "php"
lang: "en"
category: "function"
name: "cli_set_process_title"
title: "Sets the process title"
signature: "bool cli_set_process_title(string $title)"
module: "info"
source_url: "https://www.php.net/manual/en/function.cli-set-process-title.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the process title

## Description

```php
bool cli_set_process_title(string $title)
```

Sets the process title visible in tools such as top and ps. This function is available only in CLI mode.

## Parameters

- **`$title`** — The new title.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

An `E_WARNING` will be generated if the operating system is unsupported.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | `cli_set_process_title()` will now emit an `E_WARNING` when setting a process title that is too long; previously the title would be truncated. |

## Examples

 
```php

<?php
$title = "My Amazing PHP Script";
$pid = getmypid(); // you can use this to see your process title in ps

if (!cli_set_process_title($title)) {
    echo "Unable to set process title for PID $pid...\n";
    exit(1);
} else {
    echo "The process title '$title' for PID $pid has been set for your process!\n";
    sleep(5);
}
?>

   
```

 

## See Also

 `cli_get_process_title()`
