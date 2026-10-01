---
id: "en-php-function-ds-set-diff"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::diff"
title: "Creates a new set using values that aren't in another set"
signature: "public Ds\\Set Ds\\Set::diff(Ds\\Set $set)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new set using values that aren't in another set

## Description

```php
public Ds\Set Ds\Set::diff(Ds\Set $set)
```

Creates a new set using values that aren't in another set.

A \ B = {x ∈ A | x ∉ B}

## Parameters

- **`$set`** — Set containing the values to exclude.

## Return Values

A new set containing all values that were not in the other `$set`.

## See Also

[Complement]() on Wikipedia

## Examples

**`Ds\Set::diff()` example**

```php


<?php
$a = new \Ds\Set([1, 2, 3]);
$b = new \Ds\Set([3, 4, 5]);

var_dump($a->diff($b));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#3 (2) {
  [0]=>
  int(1)
  [1]=>
  int(2)
}

   
```
