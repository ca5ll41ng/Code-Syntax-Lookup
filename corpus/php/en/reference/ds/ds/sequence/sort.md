---
id: "en-php-function-ds-sequence-sort"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::sort"
title: "Sorts the sequence in-place"
signature: "abstract public void Ds\\Sequence::sort([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sorts the sequence in-place

## Description

```php
abstract public void Ds\Sequence::sort([callable $comparator = ...])
```

Sorts the sequence in-place, using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

No value is returned.

## Examples

**`Ds\Sequence::sort()` example**

```php


<?php
$sequence = new \Ds\Vector([4, 5, 1, 3, 2]);
$sequence->sort();

print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
    [4] => 5
)

   
```

**`Ds\Sequence::sort()` example using a comparator**

```php


<?php
$sequence = new \Ds\Vector([4, 5, 1, 3, 2]);

$sequence->sort(function($a, $b) {
    return $b <=> $a;
});

print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 5
    [1] => 4
    [2] => 3
    [3] => 2
    [4] => 1
)

   
```
