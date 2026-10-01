---
id: "en-php-function-function-uopz-get-static"
language: "php"
lang: "en"
category: "function"
name: "uopz_get_static"
title: "Gets the static variables from function or method scope"
signature: "array uopz_get_static(string $class, string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-get-static.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the static variables from function or method scope

## Description

```php
array uopz_get_static(string $class, string $function)
```

```php
array uopz_get_static(string $function)
```

Gets the static variables from function or method scope.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.

## Return Values

Returns an associative `array` of variable names mapped to their current values on success, or `null` if the function or method does not exist.

As of PHP 8.3.0, static initializers are either computed during compile time, or if that is not possible, only when the function or method is run the first time, in which case the value of the static variable is reported as `null` prior to the first invocation.

## Examples

**Basic `uopz_get_static()` Usage**

```php


<?php
function foo() {
    static $bar = 'baz';
}
var_dump(uopz_get_static('foo'));
?>

   
```

The above example will output:

```text


array(1) {
  ["bar"]=>
  string(3) "baz"
}

   
```

## See Also

 `ReflectionFunctionAbstract::getStaticVariables()` `uopz_set_static()`
