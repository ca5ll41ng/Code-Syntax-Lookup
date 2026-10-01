---
id: "en-php-function-ds-map-sorted"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::sorted"
title: "Returns a copy, sorted by value"
signature: "public Ds\\Map Ds\\Map::sorted([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.sorted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a copy, sorted by value

## Description

```php
public Ds\Map Ds\Map::sorted([callable $comparator = ...])
```

Returns a copy, sorted by value using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

Returns a copy of the map, sorted by value.

## Examples

**`Ds\Map::sort()` example**

```php


<?php
$map = new \Ds\Map(["a" => 2, "b" => 3, "c" => 1]);

print_r($map->sorted());
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => c
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => a
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => b
            [value] => 3
        )

)

   
```

**`Ds\Map::sort()` example using a comparator**

```php


<?php
$map = new \Ds\Map(["a" => 2, "b" => 3, "c" => 1]);

// Reverse
$sorted = $map->sorted(function($a, $b) {
    return $b <=> $a;
});

print_r($sorted);
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => b
            [value] => 3
        )

    [1] => Ds\Pair Object
        (
            [key] => a
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 1
        )

)

   
```
