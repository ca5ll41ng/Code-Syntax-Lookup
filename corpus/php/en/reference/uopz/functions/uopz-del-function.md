---
id: "en-php-function-function-uopz-del-function"
language: "php"
lang: "en"
category: "function"
name: "uopz_del_function"
title: "Deletes previously added function or method"
signature: "bool uopz_del_function(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-del-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes previously added function or method

## Description

```php
bool uopz_del_function(string $function)
```

```php
bool uopz_del_function(string $class, string $function, int $all = true)
```

Deletes a previously added function or method.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.
- **`$all`** — Whether all classes that descend from `$class` will also be affected.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

`uopz_del_function()` throws a `RuntimeException` if the function or method to delete has not been added by `uopz_add_function()`.

## Examples

**Basic `uopz_del_function()` Usage**

```php


<?php
uopz_add_function('foo', function () {echo 'bar';});
var_dump(function_exists('foo'));
uopz_del_function('foo');
var_dump(function_exists('foo'));
?>

   
```

The above example will output:

```text


bool(true)
bool(false)

   
```

## See Also

 `uopz_add_function()` `uopz_unset_return()`
