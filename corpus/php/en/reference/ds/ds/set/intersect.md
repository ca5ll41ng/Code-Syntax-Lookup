---
id: "en-php-function-ds-set-intersect"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::intersect"
title: "Creates a new set by intersecting values with another set"
signature: "public Ds\\Set Ds\\Set::intersect(Ds\\Set $set)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.intersect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new set by intersecting values with another set

## Description

```php
public Ds\Set Ds\Set::intersect(Ds\Set $set)
```

Creates a new set using values common to both the current instance and another `$set`. In other words, returns a copy of the current instance with all values removed that are not in the other `$set`.

A ∩ B = {x : x ∈ A ∧ x ∈ B}

## Parameters

- **`$set`** — The other set.

## Return Values

The intersection of the current instance and another `$set`.

## See Also

[Intersection]() on Wikipedia

## Examples

**`Ds\Set::intersect()` example**

```php


<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->intersect($b));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#3 (1) {
  [0]=>
  int(3)
}

   
```
