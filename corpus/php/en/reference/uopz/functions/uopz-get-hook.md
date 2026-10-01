---
id: "en-php-function-function-uopz-get-hook"
language: "php"
lang: "en"
category: "function"
name: "uopz_get_hook"
title: "Gets previously set hook on function or method"
signature: "Closure uopz_get_hook(string $function)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-get-hook.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets previously set hook on function or method

## Description

```php
Closure uopz_get_hook(string $function)
```

```php
Closure uopz_get_hook(string $class, string $function)
```

Gets the previously set hook on a function or method.

## Parameters

- **`$class`** — The name of the class.
- **`$function`** — The name of the function or method.

## Return Values

Returns the previously set hook on a function or method, or `null` if no hook has been set.

## Examples

**Basic `uopz_get_hook()` Usage**

```php


<?php
function foo() {
    echo 'foo';
}
uopz_set_hook('foo', function () {echo 'bar';});
var_dump(uopz_get_hook('foo'));
?>

   
```

The above example will output something similar to:

```text


object(Closure)#2 (0) {
}

   
```

## See Also

 `uopz_set_hook()` `uopz_unset_hook()`
