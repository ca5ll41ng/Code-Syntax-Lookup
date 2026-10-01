---
id: "en-php-function-ds-set-xor"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::xor"
title: "Creates a new set using values in either the current instance or in another set, but not in both"
signature: "public Ds\\Set Ds\\Set::xor(Ds\\Set $set)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.xor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new set using values in either the current instance or in another set, but not in both

## Description

```php
public Ds\Set Ds\Set::xor(Ds\Set $set)
```

Creates a new set containing values in the current instance as well as another `$set`, but not in both.

A ⊖ B = {x : x ∈ (A \ B) ∪ (B \ A)}

## Parameters

- **`$set`** — The other set.

## Return Values

A new set containing values in the current instance as well as another `$set`, but not in both.

## See Also

[Symmetric Difference]() on Wikipedia

## Examples

**`Ds\Set::xor()` example**

```php


<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->xor($b));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#3 (4) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(4)
  [3]=>
  int(5)
}

   
```
