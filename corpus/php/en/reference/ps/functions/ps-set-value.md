---
id: "en-php-function-function-ps-set-value"
language: "php"
lang: "en"
category: "function"
name: "ps_set_value"
title: "Sets certain values"
signature: "bool ps_set_value(resource $psdoc, string $name, float $value)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-set-value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets certain values

## Description

```php
bool ps_set_value(resource $psdoc, string $name, float $value)
```

Sets several values which are used by many functions. Parameters are by definition float values.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$name`** — The `$name` can be one of the following: - **textrendering** — The way how text is shown. - **textx** — The x coordinate for text output. - **texty** — The y coordinate for text output. - **wordspacing** — The distance between words relative to the width of a space. - **leading** — The distance between lines in pixels.
- **`$value`** — The value of the parameter.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_get_value()` `ps_set_parameter()`
