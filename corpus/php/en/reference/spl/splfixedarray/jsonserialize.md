---
id: "en-php-function-splfixedarray-jsonserialize"
language: "php"
lang: "en"
category: "function"
name: "SplFixedArray::jsonSerialize"
title: "Returns a representation that can be converted to JSON"
signature: "public array SplFixedArray::jsonSerialize()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfixedarray.jsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a representation that can be converted to JSON

## Description

```php
public array SplFixedArray::jsonSerialize()
```

Serializes the array to a value that can be serialized natively by `json_encode()`.

## Parameters

This function has no parameters.

## Return Values

Returns array data which can be serialized by `json_encode()`, which is a value of any type other than a `resource`.
