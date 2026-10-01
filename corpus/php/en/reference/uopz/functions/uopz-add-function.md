---
id: "en-php-function-function-uopz-add-function"
language: "php"
lang: "en"
category: "function"
name: "uopz_add_function"
title: "Adds non-existent function or method"
signature: "bool uopz_add_function(string $function, Closure $handler, int $flags = ZEND_ACC_PUBLIC)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-add-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds non-existent function or method

## Description

```php
bool uopz_add_function(string $function, Closure $handler, int $flags = ZEND_ACC_PUBLIC)
```

```php
bool uopz_add_function(string $class, string $function, Closure $handler, int $flags = ZEND_ACC_PUBLIC, int $all = true)
```

Adds a non-existent function or method.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.
- **`$handler`** — The `Closure` that defines the new function or method.
- **`$flags`** — Flags to set for the new function or method.
- **`$all`** — Whether all classes that descend from `$class` will also be affected.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

`uopz_add_function()` throws a `RuntimeException` if the function or method to add already exists.

## Examples

**Basic `uopz_add_function()` Usage**

```php


<?php
uopz_add_function('foo', function () {echo 'bar';});
foo();
?>

   
```

The above example will output:

```text


bar

   
```

## See Also

 `uopz_del_function()` `uopz_set_return()`
