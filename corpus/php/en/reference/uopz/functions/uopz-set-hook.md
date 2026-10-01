---
id: "en-php-function-function-uopz-set-hook"
language: "php"
lang: "en"
category: "function"
name: "uopz_set_hook"
title: "Sets hook to execute when entering a function or method"
signature: "bool uopz_set_hook(string $function, Closure $hook)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-set-hook.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets hook to execute when entering a function or method

## Description

```php
bool uopz_set_hook(string $function, Closure $hook)
```

```php
bool uopz_set_hook(string $class, string $function, Closure $hook)
```

Sets a hook to execute when entering a function or method.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.
- **`$hook`** — A closure to execute when entering the function or method.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Basic `uopz_set_hook()` Usage**

```php


<?php
function foo() {
    echo 'foo';
}
uopz_set_hook('foo', function () {echo 'bar';});
foo();
?>

   
```

The above example will output:

```text


barfoo

   
```

## See Also

 `uopz_get_hook()` `uopz_unset_hook()`
