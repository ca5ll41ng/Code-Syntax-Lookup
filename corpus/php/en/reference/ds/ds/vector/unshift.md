---
id: "en-php-function-ds-vector-unshift"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::unshift"
title: "Adds values to the front of the vector"
signature: "public void Ds\\Vector::unshift([mixed $values = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.unshift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the front of the vector

## Description

```php
public void Ds\Vector::unshift([mixed $values = ...])
```

Adds values to the front of the vector, moving all the current values forward to make room for the new values.

## Parameters

- **`$values`** — The values to add to the front of the vector. > Multiple values will be added in the same order that they are passed.

## Return Values

No value is returned.

## Examples

**`Ds\Vector::unshift()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);

$vector->unshift("a");
$vector->unshift("b", "c");

print_r($vector);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => a
    [3] => 1
    [4] => 2
    [5] => 3
)

   
```
