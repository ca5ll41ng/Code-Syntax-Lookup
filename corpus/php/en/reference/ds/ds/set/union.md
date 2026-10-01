---
id: "en-php-function-ds-set-union"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::union"
title: "Creates a new set using values from the current instance and another set"
signature: "public Ds\\Set Ds\\Set::union(Ds\\Set $set)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.union.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new set using values from the current instance and another set

## Description

```php
public Ds\Set Ds\Set::union(Ds\Set $set)
```

Creates a new set that contains the values of the current instance as well as the values of another `$set`.

A ∪ B = {x: x ∈ A ∨ x ∈ B}

## Parameters

- **`$set`** — The other set, to combine with the current instance.

## Return Values

A new set containing all the values of the current instance as well as another `$set`.

## See Also

[Union]() on Wikipedia

## Examples

**`Ds\Set::union()` example**

```php


<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->union($b));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#3 (5) {
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
}

   
```
