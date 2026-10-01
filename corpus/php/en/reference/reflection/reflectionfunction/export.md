---
id: "en-php-function-reflectionfunction-export"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::export"
title: "Exports function"
signature: "public static string ReflectionFunction::export(string $name, [string $return = ...])"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.export.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exports function

## Description

```php
public static string ReflectionFunction::export(string $name, [string $return = ...])
```

Exports a Reflected function.

## Parameters

- **`$name`** — The reflection to export.
- **`$return`** — Setting to `true` will return the export, as opposed to emitting it. Setting to `false` (the default) will do the opposite.

## Return Values

If the `$return` parameter is set to `true`, then the export is returned as a `string`, otherwise `null` is returned.

## See Also

`ReflectionFunction::invoke()` `ReflectionFunction::__toString()`
