---
id: "en-php-function-function-uopz-set-return"
language: "php"
lang: "en"
category: "function"
name: "uopz_set_return"
title: "Provide a return value for an existing function"
signature: "bool uopz_set_return(string $function, mixed $value, bool $execute = false)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-set-return.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Provide a return value for an existing function

## Description

```php
bool uopz_set_return(string $function, mixed $value, bool $execute = false)
```

```php
bool uopz_set_return(string $class, string $function, mixed $value, bool $execute = false)
```

Sets the return value of the `$function` to `$value`. If `$value` is a Closure and `$execute` is set, the Closure will be executed in place of the original function. It is possible to call the original function from the Closure.

> This function replaces `uopz_rename()`.

## Parameters

- **`$class`** — The name of the class containing the function
- **`$function`** — The name of an existing function
- **`$value`** — The value the function should return. If a Closure is provided and the execute flag is set, the Closure will be executed in place of the original function.
- **`$execute`** — If true, and a Closure was provided as the value, the Closure will be executed in place of the original function.

## Return Values

True if succeeded, false otherwise.

## Examples

**`uopz_set_return()` example**

```php


<?php
uopz_set_return("strlen", 42);
echo strlen("Banana");
?>

   
```

The above example will output:

```text


42

   
```

**`uopz_set_return()` example**

```php


<?php
uopz_set_return("strlen", function($str) { return strlen($str) * 2; }, true );
echo strlen("Banana");
?>

   
```

The above example will output:

```text


12

   
```

**`uopz_set_return()` class example**

```php


<?php
class My {
    public static function strlen($arg) {
        return strlen($arg);
    }
}
uopz_set_return(My::class, "strlen", function($str) { return strlen($str) * 2; }, true );
echo My::strlen("Banana");
?>

   
```

The above example will output:

```text


12

   
```
