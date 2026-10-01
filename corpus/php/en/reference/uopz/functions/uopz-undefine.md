---
id: "en-php-function-function-uopz-undefine"
language: "php"
lang: "en"
category: "function"
name: "uopz_undefine"
title: "Undefine a constant"
signature: "bool uopz_undefine(string $constant)"
module: "uopz"
source_url: "https://www.php.net/manual/en/function.uopz-undefine.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Undefine a constant

## Description

```php
bool uopz_undefine(string $constant)
```

```php
bool uopz_undefine(string $class, string $constant)
```

Removes the constant at runtime

## Parameters

- **`$class`** — The name of the class containing `$constant`
- **`$constant`** — The name of an existing constant

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`uopz_undefine()` example**

```php


<?php
define("MY", true);

uopz_undefine("MY");

var_dump(defined("MY"));
?>

   
```

The above example will output:

```text


bool(false)

   
```
