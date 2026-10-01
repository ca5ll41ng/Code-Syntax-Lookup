---
id: "en-php-function-splfixedarray-offsetset"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::offsetSet"
title: "Sets a new value at a specified index"
signature: "public void SplFixedArray::offsetSet(int $index, mixed $value)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a new value at a specified index

## Description

```php
public void SplFixedArray::offsetSet(int $index, mixed $value)
```

Sets the value at the specified `$index` to `$value`.

## Parameters

- **`$index`** — The index being set.
- **`$value`** — The new value for the `$index`.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `RuntimeException` when `$index` is outside the defined size of the array or when `$index` cannot be parsed as an integer.
