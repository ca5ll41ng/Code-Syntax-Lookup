---
id: "en-php-function-ds-vector-contains"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::contains"
title: "Determines if the vector contains given values"
signature: "public bool Ds\\Vector::contains(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if the vector contains given values

## Description

```php
public bool Ds\Vector::contains(mixed $values)
```

Determines if the vector contains all values.

## Parameters

- **`$values`** — Values to check.

## Return Values

`false` if any of the provided `$values` are not in the vector, `true` otherwise.

## Examples

**`Ds\Vector::contains()` example**

```php


<?php
$vector = new \Ds\Vector(['a', 'b', 'c', 1, 2, 3]);

var_dump($vector->contains('a'));                // true
var_dump($vector->contains('a', 'b'));           // true
var_dump($vector->contains('c', 'd'));           // false

var_dump($vector->contains(...['c', 'b', 'a'])); // true

// Always strict
var_dump($vector->contains(1));                  // true
var_dump($vector->contains('1'));                // false

var_dump($vector->contains(...[]));                // true
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(false)
bool(true)

   
```
