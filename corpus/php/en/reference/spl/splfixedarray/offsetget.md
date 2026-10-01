---
id: "en-php-function-splfixedarray-offsetget"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::offsetGet"
title: "Returns the value at the specified index"
signature: "public mixed SplFixedArray::offsetGet(int $index)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at the specified index

## Description

```php
public mixed SplFixedArray::offsetGet(int $index)
```

Returns the value at the index `$index`.

## Parameters

- **`$index`** — The index with the value.

## Return Values

The value at the specified `$index`.

## Errors/Exceptions

Throws `RuntimeException` when `$index` is outside the defined size of the array or when `$index` cannot be parsed as an integer.
