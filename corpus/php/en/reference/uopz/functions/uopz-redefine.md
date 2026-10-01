---
id: "en-php-function-function-uopz-redefine"
language: "php"
lang: "en"
category: "function"
name: "uopz_redefine"
title: "Redefine a constant"
signature: "bool uopz_redefine(string $constant, mixed $value)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-redefine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Redefine a constant

## Description

```php
bool uopz_redefine(string $constant, mixed $value)
```

```php
bool uopz_redefine(string $class, string $constant, mixed $value)
```

Redefines the given `$constant` as `$value`

## Parameters

- **`$class`** — The name of the class containing the constant
- **`$constant`** — The name of the constant
- **`$value`** — The new value for the constant, must be a valid type for a constant variable

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`uopz_redefine()` example**

```php


<?php
define("MY", 100);

uopz_redefine("MY", 1000);

echo MY;
?>

   
```

The above example will output:

```text


1000

   
```
