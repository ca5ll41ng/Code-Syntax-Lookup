---
id: "en-php-function-function-uopz-extend"
language: "php"
lang: "en"
category: "function"
name: "uopz_extend"
title: "Extend a class at runtime"
signature: "bool uopz_extend(string $class, string $parent)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-extend.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extend a class at runtime

## Description

```php
bool uopz_extend(string $class, string $parent)
```

Makes `$class` extend `$parent`

## Parameters

- **`$class`** — The name of the class to extend
- **`$parent`** — The name of the class to inherit

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

As of PHP 7.4.0, `uopz_extend()` throws a `RuntimeException`, if OPcache is enabled, and the class entry of either `$class` or `$parent` (if it is a trait) is immutable.

## Examples

**`uopz_extend()` example**

```php


<?php
class A {}
class B {}

uopz_extend(A::class, B::class);

var_dump(class_parents(A::class));
?>

   
```

The above example will output:

```text


array(1) {
  ["B"]=>
  string(1) "B"
}

   
```
