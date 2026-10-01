---
id: "en-php-function-ds-set-sorted"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::sorted"
title: "Returns a sorted copy"
signature: "public Ds\\Set Ds\\Set::sorted([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.sorted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sorted copy

## Description

```php
public Ds\Set Ds\Set::sorted([callable $comparator = ...])
```

Returns a sorted copy, using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

Returns a sorted copy of the set.

## Examples

**`Ds\Set::sorted()` example**

```php


<?php
$set = new \Ds\Set([4, 5, 1, 3, 2]);

print_r($set->sorted());
?>

   
```

The above example will output something similar to:

```text


Ds\Set Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
    [4] => 5
)

   
```

**`Ds\Set::sorted()` example using a comparator**

```php


<?php
$set = new \Ds\Set([4, 5, 1, 3, 2]);

$sorted = $set->sorted(function($a, $b) {
    return $b <=> $a;
});

print_r($sorted);
?>

   
```

The above example will output something similar to:

```text


Ds\Set Object
(
    [0] => 5
    [1] => 4
    [2] => 3
    [3] => 2
    [4] => 1
)

   
```
