---
id: "en-php-function-function-uopz-unset-hook"
language: "php"
lang: "en"
category: "function"
name: "uopz_unset_hook"
title: "Removes previously set hook on function or method"
signature: "bool uopz_unset_hook(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-unset-hook.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes previously set hook on function or method

## Description

```php
bool uopz_unset_hook(string $function)
```

```php
bool uopz_unset_hook(string $class, string $function)
```

Removes the previously set hook on a function or method.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic `uopz_unset_hook()` Usage**

```php


<?php
function foo() {
    echo 'foo';
}
uopz_set_hook('foo', function () {echo 'bar';});
foo();
echo PHP_EOL;
uopz_unset_hook('foo');
foo();
?>

   
```

The above example will output:

```text


barfoo
foo

   
```

## See Also

 `uopz_set_hook()` `uopz_get_hook()`
