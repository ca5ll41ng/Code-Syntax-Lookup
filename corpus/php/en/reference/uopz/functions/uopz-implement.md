---
id: "en-php-function-function-uopz-implement"
language: "php"
lang: "en"
category: "function"
name: "uopz_implement"
title: "Implements an interface at runtime"
signature: "bool uopz_implement(string $class, string $interface)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-implement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Implements an interface at runtime

## Description

```php
bool uopz_implement(string $class, string $interface)
```

Makes `$class` implement `$interface`

## Parameters

- **`$class`**
- **`$interface`**

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

As of PHP 7.4.0, `uopz_implement()` throws a `RuntimeException`, if OPcache is enabled, and the class entry of `$class` is immutable.

## Examples

**`uopz_implement()` example**

```php


<?php
interface myInterface {}

class myClass {}

uopz_implement(myClass::class, myInterface::class);

var_dump(class_implements(myClass::class));
?>

   
```

The above example will output:

```text


array(1) {
  ["myInterface"]=>
  string(11) "myInterface"
}

   
```
