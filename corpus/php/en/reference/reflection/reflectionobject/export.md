---
id: "en-php-function-reflectionobject-export"
language: "php"
lang: "en"
category: "function"
name: "ReflectionObject::export"
title: "Export"
signature: "public static string ReflectionObject::export(string $argument, [bool $return = ...])"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionobject.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Export

## Description

```php
public static string ReflectionObject::export(string $argument, [bool $return = ...])
```

Exports a reflection.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$argument`** — The reflection to export.
- **`$return`** — Setting to `true` will return the export, as opposed to emitting it. Setting to `false` (the default) will do the opposite.

## Return Values

If the `$return` parameter is set to `true`, then the export is returned as a `string`, otherwise `null` is returned.

## See Also

`ReflectionObject::__construct()`
