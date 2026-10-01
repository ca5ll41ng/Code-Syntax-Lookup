---
id: "en-php-function-ds-vector-merge"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::merge"
title: "Returns the result of adding all given values to the vector"
signature: "public Ds\\Vector Ds\\Vector::merge(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of adding all given values to the vector

## Description

```php
public Ds\Vector Ds\Vector::merge(mixed $values)
```

Returns the result of adding all given values to the vector.

## Parameters

- **`$values`** — A `traversable` object or an `array`.

## Return Values

The result of adding all given values to the vector, effectively the same as adding the values to a copy, then returning that copy.

> The current instance won't be affected.

## Examples

**`Ds\Vector::merge()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);

var_dump($vector->merge([4, 5, 6]));
var_dump($vector);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#2 (6) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  int(4)
  [4]=>
  int(5)
  [5]=>
  int(6)
}
object(Ds\Vector)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
