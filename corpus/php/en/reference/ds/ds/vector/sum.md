---
id: "en-php-function-ds-vector-sum"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::sum"
title: "Returns the sum of all values in the vector"
signature: "public int|float Ds\\Vector::sum()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the sum of all values in the vector

## Description

```php
public int|float Ds\Vector::sum()
```

Returns the sum of all values in the vector.

> Arrays and objects are considered equal to zero when calculating the sum.

## Parameters

This function has no parameters.

## Return Values

The sum of all the values in the vector as either a `float` or `int` depending on the values in the vector.

## Examples

**`Ds\Vector::sum()` integer example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector->sum());
?>

   
```

The above example will output something similar to:

```text


int(6)

   
```

**`Ds\Vector::sum()` float example**

```php


<?php
$vector = new \Ds\Vector([1, 2.5, 3]);
var_dump($vector->sum());
?>

   
```

The above example will output something similar to:

```text


float(6.5)

   
```
