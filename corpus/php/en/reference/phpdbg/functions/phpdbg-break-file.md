---
id: "en-php-function-function-phpdbg-break-file"
language: "php"
lang: "en"
category: "function"
name: "phpdbg_break_file"
title: "Inserts a breakpoint at a line in a file"
signature: "void phpdbg_break_file(string $file, int $line)"
module: "phpdbg"
source_url: "https://www.php.net/manual/en/function.phpdbg-break-file.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts a breakpoint at a line in a file

## Description

```php
void phpdbg_break_file(string $file, int $line)
```

Insert a breakpoint at the given `$line` in the given `$file`.

## Parameters

- **`$file`** — The name of the file.
- **`$line`** — The line number.

## Return Values

No value is returned.

## See Also

 `phpdbg_break_function()` `phpdbg_break_method()` `phpdbg_break_next()` `phpdbg_clear()`
