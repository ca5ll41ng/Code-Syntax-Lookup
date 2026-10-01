---
id: "en-php-function-luasandbox-wrapphpfunction"
language: "php"
lang: "en"
category: "function"
name: "LuaSandbox::wrapPhpFunction"
title: "Wrap a PHP callable in a `LuaSandboxFunction`"
signature: "public LuaSandboxFunction LuaSandbox::wrapPhpFunction(callable $function)"
module: "luasandbox"
source_url: "https://www.php.net/manual/en/luasandbox.wrapphpfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Wrap a PHP callable in a `LuaSandboxFunction`

## Description

```php
public LuaSandboxFunction LuaSandbox::wrapPhpFunction(callable $function)
```

Wraps a PHP callable in a `LuaSandboxFunction`, so it can be passed into Lua as an anonymous function.

The function must return either an array of values (which may be empty), or `null` which is equivalent to returning the empty array.

Exceptions will be raised as errors in Lua, however only `LuaSandboxRuntimeError` exceptions may be caught inside Lua with `pcall()` or `xpcall()`.

For more information about calling Lua functions and the return values, see `LuaSandboxFunction::call()`.

## Parameters

- **`$function`** — Callable to wrap.

## Return Values

Returns a `LuaSandboxFunction`.

## See Also

 `LuaSandbox::loadString()` `LuaSandbox::registerLibrary()`
