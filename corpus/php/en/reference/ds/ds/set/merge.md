---
id: "en-php-function-ds-set-merge"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::merge"
title: "Returns the result of adding all given values to the set"
signature: "public Ds\\Set Ds\\Set::merge(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of adding all given values to the set

## Description

```php
public Ds\Set Ds\Set::merge(mixed $values)
```

Returns the result of adding all given values to the set.

## Parameters

- **`$values`** — A `traversable` object or an `array`.

## Return Values

The result of adding all given values to the set, effectively the same as adding the values to a copy, then returning that copy.

> The current instance won't be affected.

## Examples

**`Ds\Set::merge()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->merge([3, 4, 5]));
var_dump($set);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#2 (6) {
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
object(Ds\Set)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
