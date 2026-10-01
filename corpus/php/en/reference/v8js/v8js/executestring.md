---
id: "en-php-function-v8js-executestring"
language: "php"
lang: "en"
category: "function"
name: "V8Js::executeString"
title: "Execute a string as Javascript code"
signature: "public mixed V8Js::executeString(string $script, string $identifier = \"V8Js::executeString()\", int $flags = V8Js::FLAG_NONE)"
module: "v8js"
source_url: "https://www.php.net/manual/en/v8js.executestring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a string as Javascript code

## Description

```php
public mixed V8Js::executeString(string $script, string $identifier = "V8Js::executeString()", int $flags = V8Js::FLAG_NONE)
```

Compiles and executes the string passed with `$script` as Javascript code.

## Parameters

- **`$script`** — The code string to be executed.
- **`$identifier`** — Identifier string for the executed code. Used for debugging.
- **`$flags`** — Execution flags. This value must be one of the `V8Js::FLAG_*` constants, defaulting to `V8Js::FLAG_NONE`. - `V8Js::FLAG_NONE`: no flags - `V8Js::FLAG_FORCE_ARRAY`: forces all Javascript objects passed to PHP to be associative arrays

## Return Values

Returns the last variable instantiated in the Javascript code converted to matching PHP variable type.
