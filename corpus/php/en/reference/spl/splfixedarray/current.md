---
id: "en-php-function-splfixedarray-current"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::current"
title: "Return current array entry"
signature: "public mixed SplFixedArray::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return current array entry

## Description

```php
public mixed SplFixedArray::current()
```

Get the current array element.

## Parameters

This function has no parameters.

## Return Values

The current element value.

## Errors/Exceptions

Throws `RuntimeException` when the internal array pointer points to an invalid index or is out of bounds.
