---
id: "en-php-function-reflectionparameter-export"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::export"
title: "Exports"
signature: "public static string ReflectionParameter::export(string $function, string $parameter, [bool $return = ...])"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exports

## Description

```php
public static string ReflectionParameter::export(string $function, string $parameter, [bool $return = ...])
```

Exports.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$function`** — The function name.
- **`$parameter`** — The parameter name.
- **`$return`** — Setting to `true` will return the export, as opposed to emitting it. Setting to `false` (the default) will do the opposite.

## Return Values

The exported reflection.

## See Also

`ReflectionParameter::__toString()`
