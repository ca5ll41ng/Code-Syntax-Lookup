---
id: "en-php-function-ds-deque-sort"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::sort"
title: "Sorts the deque in-place"
signature: "public void Ds\\Deque::sort([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.sort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sorts the deque in-place

## Description

```php
public void Ds\Deque::sort([callable $comparator = ...])
```

Sorts the deque in-place, using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

No value is returned.

## Examples

**`Ds\Deque::sort()` example**

```php


<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);
$deque->sort();

print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
    [4] => 5
)

   
```

**`Ds\Deque::sort()` example using a comparator**

```php


<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);

$deque->sort(function($a, $b) {
    return $b <=> $a;
});

print_r($deque);
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => 5
    [1] => 4
    [2] => 3
    [3] => 2
    [4] => 1
)

   
```
