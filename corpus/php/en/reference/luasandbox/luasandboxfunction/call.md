---
id: "en-php-function-luasandboxfunction-call"
language: "php"
lang: "en"
category: "function"
name: "LuaSandboxFunction::call"
title: "Call a Lua function"
signature: "public array|bool LuaSandboxFunction::call(string $args)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandboxfunction.call.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Call a Lua function

## Description

```php
public array|bool LuaSandboxFunction::call(string $args)
```

Calls a Lua function.

Errors considered to be the fault of the PHP code will result in the function returning `false` and `E_WARNING` being raised, for example, a `resource` type being used as an argument. Lua errors will result in a `LuaSandboxRuntimeError` exception being thrown.

PHP and Lua types are converted as follows:

- PHP `null` is Lua `nil`, and vice versa.
- PHP `int`s and `float`s are converted to Lua numbers. Infinity and `NAN` are supported.
- Lua numbers without a fractional part between approximately `-2**53` and `2**53` are converted to PHP `int`s, with others being converted to PHP `float`s.
- PHP `bool`s are Lua booleans, and vice versa.
- PHP `string`s are Lua strings, and vice versa.
- Lua functions are PHP `LuaSandboxFunction` objects, and vice versa. General PHP `callable`s are not supported.
- PHP `array`s are converted to Lua tables, and vice versa. - Note that Lua typically indexes arrays from 1, while PHP indexes arrays from 0. No adjustment is made for these differing conventions. - Self-referential arrays are not supported in either direction. - PHP references are dereferenced. - Lua `__pairs` and `__ipairs` are processed. `__index` is ignored. - When converting from PHP to Lua, integer keys between `-2**53` and `2**53` are represented as Lua numbers. All other keys are represented as Lua strings. - When converting from Lua to PHP, keys other than strings and numbers will result in an error, as will collisions when converting numbers to strings or vice versa (since PHP considers things like `$a[0]` and `$a["0"]` as being equivalent).
- All other types are unsupported and will raise an error/exception, including general PHP `object`s and Lua userdata and thread types.

Lua functions inherently return a list of results. So on success, this method returns an `array` containing all of the values returned by Lua, with `int` keys starting from zero. Lua may return no results, in which case an empty array is returned.

## Parameters

- **`$args`** — Arguments passed to the function.

## Return Values

Returns an `array` of values returned by the function, which may be empty, or `false` on failure.
