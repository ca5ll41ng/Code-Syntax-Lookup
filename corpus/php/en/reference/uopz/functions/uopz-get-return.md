---
id: "en-php-function-function-uopz-get-return"
language: "php"
lang: "en"
category: "function"
name: "uopz_get_return"
title: "Gets a previous set return value for a function"
signature: "mixed uopz_get_return(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-get-return.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a previous set return value for a function

## Description

```php
mixed uopz_get_return(string $function)
```

```php
mixed uopz_get_return(string $class, string $function)
```

Gets the return value of the `$function` previously set by `uopz_set_return()`.

## Parameters

- **`$class`** — The name of the class containing the function
- **`$function`** — The name of the function

## Return Values

The return value or Closure previously set.

## Examples

**`uopz_get_return()` example**

```php


<?php
uopz_set_return("strlen", 42);
echo uopz_get_return("strlen");
?>

   
```

The above example will output:

```text


42

   
```
