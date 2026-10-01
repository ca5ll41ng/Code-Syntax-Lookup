---
id: "en-php-function-function-ps-set-parameter"
language: "php"
lang: "en"
category: "function"
name: "ps_set_parameter"
title: "Sets certain parameters"
signature: "bool ps_set_parameter(resource $psdoc, string $name, string $value)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-set-parameter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets certain parameters

## Description

```php
bool ps_set_parameter(resource $psdoc, string $name, string $value)
```

Sets several parameters which are used by many functions. Parameters are by definition string values.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$name`** — For a list of possible names see `ps_get_parameter()`.
- **`$value`** — The value of the parameter.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_get_parameters()` `ps_set_value()`
