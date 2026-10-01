---
id: "en-php-function-function-uopz-copy"
language: "php"
lang: "en"
category: "function"
name: "uopz_copy"
title: "Copy a function"
signature: "Closure uopz_copy(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Copy a function

## Description

```php
Closure uopz_copy(string $function)
```

```php
Closure uopz_copy(string $class, string $function)
```

Copy a function by name

## Parameters

- **`$class`** — The name of the class containing the function to copy
- **`$function`** — The name of the function

## Return Values

A Closure for the specified function

## Examples

**`uopz_copy()` example**

```php


<?php
$strtotime = uopz_copy('strtotime');

uopz_function("strtotime", function($arg1, $arg2) use($strtotime) {
    /* can call original strtotime from here */
    var_dump($arg1);
});

var_dump(strtotime('dummy'));
?>

   
```

The above example will output:

```text


string(5) "dummy"

   
```
