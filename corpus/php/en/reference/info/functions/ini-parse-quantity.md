---
id: "en-php-function-function-ini-parse-quantity"
language: "php"
lang: "en"
category: "function"
name: "ini_parse_quantity"
title: "Get interpreted size from ini shorthand syntax"
signature: "int ini_parse_quantity(string $shorthand)"
module: "info"
source_url: "https://www.php.net/manual/en/function.ini-parse-quantity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get interpreted size from ini shorthand syntax

## Description

```php
int ini_parse_quantity(string $shorthand)
```

Returns the interpreted size in bytes on success from an ini shorthand.

## Parameters

- **`$shorthand`** — Ini shorthand to parse, must be a number followed by an optional multiplier. The following multipliers are supported: `k`/`K` (`1024`), `m`/`M` (`1048576`), `g`/`G` (`1073741824`). The number can be a decimal, hex (prefixed with `0x` or `0X`), octal (prefixed with `0o`, `0O` or `0`) or binary (prefixed with `0b` or `0B`)

## Return Values

Returns the interpreted size in bytes as an `integer`.

## Errors/Exceptions

If the value cannot be parsed, or an invalid multiplier is used, an `E_WARNING` is raised.

## Examples

**A few `ini_parse_quantity()` examples**

```php


<?php

var_dump(ini_parse_quantity('1024'));
var_dump(ini_parse_quantity('1024M'));
var_dump(ini_parse_quantity('512K'));
var_dump(ini_parse_quantity('0xFFk'));
var_dump(ini_parse_quantity('0b1010k'));
var_dump(ini_parse_quantity('0o1024'));
var_dump(ini_parse_quantity('01024'));
var_dump(ini_parse_quantity('Foobar'));
var_dump(ini_parse_quantity('10F'));

?>

    
```

The above example will output:

```text



int(1024)
int(1073741824)
int(524288)
int(261120)
int(10240)
int(532)
int(532)

Warning: Invalid quantity "Foobar": no valid leading digits, interpreting as "0" for backwards compatibility
int(0)

Warning: Invalid quantity "10F": unknown multiplier "F", interpreting as "10" for backwards compatibility
int(10)


    
```

## See Also

 `ini_get()`
