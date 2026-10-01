---
id: "en-php-function-function-phpdbg-break-method"
language: "php"
lang: "en"
category: "function"
name: "phpdbg_break_method"
title: "Inserts a breakpoint at entry to a method"
signature: "void phpdbg_break_method(string $class, string $method)"
module: "phpdbg"
source_url: "https://www.php.net/manual/en/function.phpdbg-break-method.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts a breakpoint at entry to a method

## Description

```php
void phpdbg_break_method(string $class, string $method)
```

Insert a breakpoint at the entry to the given `$method` of the given `$class`.

## Parameters

- **`$class`** — The name of the class.
- **`$method`** — The name of the method.

## Return Values

No value is returned.

## See Also

 `phpdbg_break_file()` `phpdbg_break_function()` `phpdbg_break_next()` `phpdbg_clear()`
