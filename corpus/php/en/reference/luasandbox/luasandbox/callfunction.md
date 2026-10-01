---
id: "en-php-function-luasandbox-callfunction"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::callFunction"
title: "Call a function in a Lua global variable"
signature: "public array|bool LuaSandbox::callFunction(string $name, mixed $args)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.callfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Call a function in a Lua global variable

## Description

```php
public array|bool LuaSandbox::callFunction(string $name, mixed $args)
```

Calls a function in a Lua global variable.

If the name contains "." characters, the function is located via recursive table accesses, as if the name were a Lua expression.

If the variable does not exist, or is not a function, false will be returned and a warning issued.

For more information about calling Lua functions and the return values, see `LuaSandboxFunction::call()`.

## Parameters

- **`$name`** — Lua variable name.
- **`$args`** — Arguments to the function.

## Return Values

Returns an `array` of values returned by the Lua function, which may be empty, or `false` on failure.

## Examples

**Calling a Lua function**

```php


<?php

// create a new LuaSandbox
$sandbox = new LuaSandbox();

// Call Lua's string.match
$captures = $sandbox->callFunction( 'string.match', $string, $pattern );

?>

   
```
