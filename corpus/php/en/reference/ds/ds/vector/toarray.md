---
id: "en-php-function-ds-vector-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::toArray"
title: "Converts the vector to an `array`"
signature: "public array Ds\\Vector::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the vector to an `array`

## Description

```php
public array Ds\Vector::toArray()
```

Converts the vector to an `array`.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the vector.

## Examples

**`Ds\Vector::toArray()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);

var_dump($vector->toArray());
?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
