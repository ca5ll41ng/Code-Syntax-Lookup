---
id: "en-php-function-splfixedarray-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::offsetUnset"
title: "Unsets the value at the specified $index"
signature: "public void SplFixedArray::offsetUnset(int $index)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unsets the value at the specified $index

## Description

```php
public void SplFixedArray::offsetUnset(int $index)
```

Unsets the value at the specified index.

## Parameters

- **`$index`** — The index being unset.

## Return Values

No value is returned.

## Errors/Exceptions

Throws `RuntimeException` when `$index` is outside the defined size of the array or when `$index` cannot be parsed as an integer.
