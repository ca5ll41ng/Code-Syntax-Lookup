---
id: "en-php-function-ds-map-ksort"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::ksort"
title: "Sorts the map in-place by key"
signature: "public void Ds\\Map::ksort([callable $comparator = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.ksort.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sorts the map in-place by key

## Description

```php
public void Ds\Map::ksort([callable $comparator = ...])
```

Sorts the map in-place by key, using an optional `$comparator` function.

## Parameters

- **`$comparator`** — The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.
  > Returning *non-integer* values from the comparison function, such as `float`, will result in an internal cast to `int` of the callback's return value. So values such as `0.99` and `0.1` will both be cast to an integer value of `0`, which will compare such values as equal.



## Return Values

No value is returned.

## Examples

**`Ds\Map::ksort()` example**

```php


<?php
$map = new \Ds\Map(["b" => 2, "c" => 3, "a" => 1]);
$map->ksort();

print_r($map);
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

)

   
```

**`Ds\Map::ksort()` example using a comparator**

```php


<?php
$map = new \Ds\Map([1 => "x", 2 => "y", 0 => "z"]);

// Reverse
$map->ksort(function($a, $b) {
    return $b <=> $a;
});

print_r($map);
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => 2
            [value] => y
        )

    [1] => Ds\Pair Object
        (
            [key] => 1
            [value] => x
        )

    [2] => Ds\Pair Object
        (
            [key] => 0
            [value] => z
        )

)

   
```
