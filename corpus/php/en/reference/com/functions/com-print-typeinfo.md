---
id: "en-php-function-function-com-print-typeinfo"
language: "php"
lang: "en"
category: "function"
name: "com_print_typeinfo"
title: "Print out a PHP class definition for a dispatchable interface"
signature: "bool com_print_typeinfo(variant|string $variant, string|null $dispatch_interface = null, bool $display_sink = false)"
module: "com"
source_url: "https://www.php.net/manual/en/function.com-print-typeinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Print out a PHP class definition for a dispatchable interface

## Description

```php
bool com_print_typeinfo(variant|string $variant, string|null $dispatch_interface = null, bool $display_sink = false)
```

The purpose of this function is to help generate a skeleton class for use as an event sink. You may also use it to generate a dump of any COM object, provided that it supports enough of the introspection interfaces, and that you know the name of the interface you want to display.

## Parameters

- **`$variant`** — `$variant` should be either an instance of a COM object, or be the name of a typelibrary (which will be resolved according to the rules set out in `com_load_typelib()`).
- **`$dispatch_interface`** — The name of an `IDispatch` descendant interface that you want to display.
- **`$display_sink`** — If set to `true`, the corresponding sink interface will be displayed instead.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`com_event_sink()` `com_load_typelib()`
