---
id: "en-php-function-function-uopz-unset-return"
language: "php"
lang: "en"
category: "function"
name: "uopz_unset_return"
title: "Unsets a previously set return value for a function"
signature: "bool uopz_unset_return(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-unset-return.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unsets a previously set return value for a function

## Description

```php
bool uopz_unset_return(string $function)
```

```php
bool uopz_unset_return(string $class, string $function)
```

Unsets the return value of the `$function` previously set by `uopz_set_return()`.

## Parameters

- **`$class`** — The name of the class containing the function
- **`$function`** — The name of the function

## Return Values

True on success

## Examples

**`uopz_unset_return()` example**

```php


<?php
uopz_set_return("strlen", 42);
$len = strlen("Banana");
uopz_unset_return("strlen");
echo $len + strlen("Banana");
?>

   
```

The above example will output:

```text


48

   
```
