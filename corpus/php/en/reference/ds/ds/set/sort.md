---
id: "en-php-function-ds-set-sort"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::sort"
title: "Sorts the set in-place"
signature: "public void Ds\\Set::sort([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sorts the set in-place

## Description

```php
public void Ds\Set::sort([callable $comparator = ...])
```

Sorts the set in-place, using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

No value is returned.

## Examples

**`Ds\Set::sort()` example**

```php


<?php
$set = new \Ds\Set([4, 5, 1, 3, 2]);
$set->sort();

print_r($set);
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

**`Ds\Set::sort()` example using a comparator**

```php


<?php
$set = new \Ds\Set([4, 5, 1, 3, 2]);

$set->sort(function($a, $b) {
    return $b <=> $a;
});

print_r($set);
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
