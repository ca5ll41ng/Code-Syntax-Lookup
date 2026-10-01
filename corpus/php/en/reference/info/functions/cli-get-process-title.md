---
id: "en-php-function-function-cli-get-process-title"
language: "php"
lang: "en"
category: "function"
name: "cli_get_process_title"
title: "Returns the current process title"
signature: "string|null cli_get_process_title()"
module: "info"
source_url: "https://www.php.net/manual/en/function.cli-get-process-title.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current process title

## Description

```php
string|null cli_get_process_title()
```

Returns the current process title, as set by `cli_set_process_title()`. Note that this may not exactly match what is shown in ps or top, depending on your operating system.

This function is available only in CLI mode.

## Parameters

This function has no parameters.

## Return Values

Return a string with the current process title or `null` on error.

## Errors/Exceptions

An `E_WARNING` will be generated if the operating system is unsupported.

## Examples

**`cli_get_process_title()` example**

```php


<?php
echo "Process title: " . cli_get_process_title() . "\n";
?>

    
```

## See Also

`cli_set_process_title()`
