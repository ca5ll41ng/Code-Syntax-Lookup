---
id: "en-php-function-function-uopz-set-static"
language: "php"
lang: "en"
category: "function"
name: "uopz_set_static"
title: "Sets the static variables in function or method scope"
signature: "void uopz_set_static(string $function, array $static)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-set-static.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the static variables in function or method scope

## Description

 {{{ 

```php
void uopz_set_static(string $function, array $static)
```

```php
void uopz_set_static(string $class, string $function, array $static)
```

Sets the static variables in function or method scope.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.
- **`$static`** — The associative `array` of variable names mapped to their values.

## Return Values

No value is returned.

## Examples

**Basic `uopz_set_static()` Usage**

```php


<?php
function foo() {
    static $bar = 'baz';
    var_dump($bar);
}
uopz_set_static('foo', ['bar' => 'qux']);
foo();
?>

   
```

The above example will output:

```text


string(3) "qux"

   
```

## See Also

 `uopz_get_static()`
