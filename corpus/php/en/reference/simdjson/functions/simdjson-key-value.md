---
id: "en-php-function-function-simdjson-key-value"
language: "php"
lang: "en"
category: "function"
name: "simdjson_key_value"
title: "Decodes the value of a JSON string located at the requested JSON pointer."
signature: "mixed simdjson_key_value(string $json, string $key, bool $associative = false, int $depth = 512)"
module: "simdjson"
source_url: "https://www.php.net/manual/en/function.simdjson-key-value.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Decodes the value of a JSON string located at the requested JSON pointer.

## Description

```php
mixed simdjson_key_value(string $json, string $key, bool $associative = false, int $depth = 512)
```

Decodes and returns the value found at the requested JSON pointer.

## Parameters

- **`$json`** — The `$json` `string` being queried and decoded. — This function only works with UTF-8 encoded strings. — This function parses valid inputs which `json_decode()` can decode, provided that they are less than 4 GiB long.
- **`$key`** — The JSON pointer `string`.
- **`$associative`** — When `true`, JSON objects will be returned as associative `array`s; when `false`, JSON objects will be returned as `object`s.
- **`$depth`** — Maximum nesting depth of the structure being decoded. The value must be greater than `0`, and less than or equal to `2147483647`. Callers should use reasonably small values, because larger depths require more buffer space and will increase the recursion depth, unlike the current `json_decode()` implementation.

## Return Values

Returns the part of the value encoded in `$json` that `$key` refers to in appropriate PHP type. Values `true`, `false` and `null` are returned as `true`, `false` and `null` respectively.

## Errors/Exceptions

If `$json` or `$key` is invalid, or `$key` could not be found within `$json`, a `SimdJsonException` is thrown as of PECL simdjson 2.1.0, while previously, a `RuntimeException` was thrown.

If `$depth` is outside the allowed range, a `SimdJsonValueError` is thrown as of PECL simdjson 3.0.0, while previously, an error of level `E_WARNING` was raised.

## See Also

 `json_encode()` `simdjson_decode()`
