---
id: "en-php-function-luasandbox-registerlibrary"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::registerLibrary"
title: "Register a set of PHP functions as a Lua library"
signature: "public void LuaSandbox::registerLibrary(string $libname, array $functions)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.registerlibrary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Register a set of PHP functions as a Lua library

## Description

```php
public void LuaSandbox::registerLibrary(string $libname, array $functions)
```

Registers a set of PHP functions as a Lua library, so that Lua can call the relevant PHP code.

For more information about calling Lua functions and the return values, see `LuaSandboxFunction::call()`.

## Parameters

- **`$libname`** — The name of the library. In the Lua state, the global variable of this name will be set to the table of functions. If the table already exists, the new functions will be added to it.
- **`$functions`** — An `array`, where each key is a function name, and each value is a corresponding PHP `callable`.

## Return Values

No value is returned.

## Examples

**Registering PHP functions to call from Lua**

```php


<?php

// create a new LuaSandbox
$sandbox = new LuaSandbox();

// Register some functions in the Lua environment

function frobnosticate( $v ) {
    return [ $v + 42 ];
}

$sandbox->registerLibrary( 'php', [
    'frobnosticate' => 'frobnosticate',
    'output' => function ( $string ) {
        echo "$string\n";
    },
    'error' => function () {
        throw new LuaSandboxRuntimeError( "Something is wrong" );
    }
] );

?>

   
```

## See Also

 `LuaSandbox::loadString()` `LuaSandbox::wrapPhpFunction()`
