---
id: "en-php-function-function-class-uses"
language: "php"
lang: "en"
category: "function"
name: "class_uses"
title: "Return the traits used by the given class"
signature: "array|false class_uses(object|string $object_or_class, bool $autoload = true)"
module: "spl"
source_url: "https://www.php.net/manual/en/function.class-uses.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the traits used by the given class

## Description

```php
array|false class_uses(object|string $object_or_class, bool $autoload = true)
```

This function returns an array with the names of the traits that the given `$object_or_class` uses. This does however not include any traits used by a parent class.

## Parameters

- **`$object_or_class`** — An object (class instance) or a string (class name).
- **`$autoload`** — Whether to autoload if not already loaded.

## Return Values

An array on success, or `false` when the given class doesn't exist.

## Examples

**`class_uses()` example**

```php


<?php

trait foo { }
class bar {
  use foo;
}

print_r(class_uses(new bar));

print_r(class_uses('bar'));

spl_autoload_register();

// use autoloading to load the 'not_loaded' class
print_r(class_uses('not_loaded', true));

?>

    
```

The above example will output something similar to:

```text


Array
(
    [foo] => foo
)
Array
(
    [foo] => foo
)
Array
(
    [trait_of_not_loaded] => trait_of_not_loaded
)

    
```

## See Also

`class_parents()` `get_declared_traits()`
