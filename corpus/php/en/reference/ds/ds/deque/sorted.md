---
id: "en-php-function-ds-deque-sorted"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::sorted"
title: "Returns a sorted copy"
signature: "public Ds\\Deque Ds\\Deque::sorted([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.sorted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sorted copy

## Description

```php
public Ds\Deque Ds\Deque::sorted([callable $comparator = ...])
```

Returns a sorted copy, using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

Returns a sorted copy of the deque.

## Examples

**`Ds\Deque::sorted()` example**

```php


<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);

print_r($deque->sorted());
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

**`Ds\Deque::sorted()` example using a comparator**

```php


<?php
$deque = new \Ds\Deque([4, 5, 1, 3, 2]);

$sorted = $deque->sorted(function($a, $b) {
    return $b <=> $a;
});

print_r($sorted);
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
