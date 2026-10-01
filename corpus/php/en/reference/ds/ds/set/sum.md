---
id: "en-php-function-ds-set-sum"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::sum"
title: "Returns the sum of all values in the set"
signature: "public int|float Ds\\Set::sum()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the sum of all values in the set

## Description

```php
public int|float Ds\Set::sum()
```

Returns the sum of all values in the set.

> Arrays and objects are considered equal to zero when calculating the sum.

## Parameters

This function has no parameters.

## Return Values

The sum of all the values in the set as either a `float` or `int` depending on the values in the set.

## Examples

**`Ds\Set::sum()` integer example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);
var_dump($set->sum());
?>

   
```

The above example will output something similar to:

```text


int(6)

   
```

**`Ds\Set::sum()` float example**

```php


<?php
$set = new \Ds\Set([1, 2.5, 3]);
var_dump($set->sum());
?>

   
```

The above example will output something similar to:

```text


float(6.5)

   
```
