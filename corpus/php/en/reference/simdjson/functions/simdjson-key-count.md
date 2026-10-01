---
id: "en-php-function-function-simdjson-key-count"
language: "php"
lang: "en"
category: "function"
name: "simdjson_key_count"
title: "Returns the value at a JSON pointer."
signature: "int simdjson_key_count(string $json, string $key, int $depth = 512, bool $throw_if_uncountable = false)"
module: "simdjson"
source_url: "https://www.php.net/manual/en/function.simdjson-key-count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at a JSON pointer.

## Description

```php
int simdjson_key_count(string $json, string $key, int $depth = 512, bool $throw_if_uncountable = false)
```

Count the number of elements of the object/array found at the requested JSON pointer.

## Parameters

- **`$json`** — The `$json` `string` being queried.
- **`$key`** — The JSON pointer `string`.
- **`$depth`** — Maximum nesting depth of the structure being validated. The value must be greater than `0`, and less than or equal to `2147483647`. Callers should use reasonably small values, because larger depths require more buffer space and will increase the recursion depth, unlike the current `json_decode()` implementation.
- **`$throw_if_uncountable`** — When true, a `SimdJsonException` will be thrown instead of returning 0 when the value the JSON pointer points to is neither an object nor an array.

## Return Values

Returns an `integer` with the number of elements of the value at the given JSON pointer.
