---
id: "en-php-function-luasandbox-loadstring"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::loadString"
title: "Load Lua code into the Lua environment"
signature: "public LuaSandboxFunction LuaSandbox::loadString(string $code, string $chunkName = '')"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.loadstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Load Lua code into the Lua environment

## Description

```php
public LuaSandboxFunction LuaSandbox::loadString(string $code, string $chunkName = '')
```

Loads Lua code into the Lua environment.

This is the equivalent of standard Lua's `loadstring()` function.

## Parameters

- **`$code`** — Lua code.
- **`$chunkName`** — Name for the loaded chunk, for use in error traces.

## Return Values

Returns a `LuaSandboxFunction` which, when executed, will execute the passed `$code`.

## Examples

**Loading code into Lua**

```php


<?php

// create a new LuaSandbox
$sandbox = new LuaSandbox();

// Load the code
$function = $sandbox->loadString(
<<<CODE
    return "Hello, world"
CODE
);

// Execute the loaded code
var_dump( $function->call() );

?>

   
```

The above example will output:

```text


array(1) {
  [0]=>
  string(12) "Hello, world"
}

   
```

## See Also

 `LuaSandbox::registerLibrary()` `LuaSandbox::wrapPhpFunction()`
