---
id: "en-php-function-function-simdjson-is-valid"
language: "php"
lang: "en"
category: "function"
name: "simdjson_is_valid"
title: "Check if a JSON string is valid"
signature: "bool simdjson_is_valid(string $json, int $depth = 512)"
module: "simdjson"
source_url: "https://www.php.net/manual/en/function.simdjson-is-valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if a JSON string is valid

## Description

```php
bool simdjson_is_valid(string $json, int $depth = 512)
```

Takes a JSON encoded string and returns true if it is valid.

## Parameters

- **`$json`** — The `$json` `string` being validated. — This function only works with UTF-8 encoded strings. — This function validates inputs which `json_decode()` can decode, provided that they are less than 4 GiB long.
- **`$depth`** — Maximum nesting depth of the structure being validated. The value must be greater than `0`, and less than or equal to `2147483647`. Callers should use reasonably small values, because larger depths require more buffer space and will increase the recursion depth, unlike the current `json_decode()` implementation.

## Return Values

Returns `true` if `$json` is a valid JSON string, `false` otherwise.

## Errors/Exceptions

If `$json` is longer than 4 GiB, a `SimdJsonException` is thrown as of PECL simdjson 2.1.0, while previously, a `RuntimeException` was thrown.

If `$depth` is outside the allowed range, a `SimdJsonValueError` is thrown as of PECL simdjson 3.0.0, while previously, an error of level `E_WARNING` was raised.

## Examples

**`simdjson_decode()` examples**

```php


<?php
$json = '{"a":1,"b":2,"c":3}';
$invalidJson = '{"a":1,"b":2,"c":';

var_dump(simdjson_is_valid($json));
var_dump(simdjson_is_valid($invalidJson));

?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

**`$depth` errors**

```php


<?php
// Encode some data with a maximum depth of 4
// (array -> array -> array -> string)
$json = json_encode(
    [
        1 => [
            'English' => [
                'One',
                'January'
            ],
            'French' => [
                'Une',
                'Janvier'
            ]
        ]
    ]
);

// Show the errors for different depths.
var_dump(simdjson_is_valid($json, 4));
var_dump(simdjson_is_valid($json, 3));
?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

## Notes

> The JSON spec is not JavaScript, but a subset of JavaScript.

> In the event of a failure to decode, a `SimdJsonException` is thrown and `SimdJsonException::getCode()` and `SimdJsonException::getMessage()` can be used to determine the exact nature of the error.

## See Also

 `json_encode()` `json_decode()`
