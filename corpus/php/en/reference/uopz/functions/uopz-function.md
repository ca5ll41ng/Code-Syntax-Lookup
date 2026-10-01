---
id: "en-php-function-function-uopz-function"
language: "php"
lang: "en"
category: "function"
name: "uopz_function"
title: "Creates a function at runtime"
signature: "void uopz_function(string $function, Closure $handler, [int $modifiers = ...])"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-function.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a function at runtime

## Description

```php
void uopz_function(string $function, Closure $handler, [int $modifiers = ...])
```

```php
void uopz_function(string $class, string $function, Closure $handler, [int $modifiers = ...])
```

Creates a function at runtime

## Parameters

- **`$class`** — The name of the class to receive the new function
- **`$function`** — The name of the function
- **`$handler`** — The Closure for the function
- **`$modifiers`** — The modifiers for the function, by default copied or ZEND_ACC_PUBLIC

## Return Values

## Examples

**`uopz_function()` example**

```php


<?php
uopz_function("my_strlen", function($arg) {
    return strlen($arg);
});
echo my_strlen("Hello World");
?>

   
```

The above example will output:

```text


11

   
```

**`uopz_function()` class example**

```php


<?php
class My {}

uopz_function(My::class, "strlen", function($arg) {
    return strlen($arg);
}, ZEND_ACC_STATIC);

echo My::strlen("Hello World");
?>

   
```

The above example will output:

```text


11

   
```
