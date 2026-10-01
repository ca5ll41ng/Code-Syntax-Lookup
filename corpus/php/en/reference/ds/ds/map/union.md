---
id: "en-php-function-ds-map-union"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::union"
title: "Creates a new map using values from the current instance and another map"
signature: "public Ds\\Map Ds\\Map::union(Ds\\Map $map)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.union.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new map using values from the current instance and another map

## Description

```php
public Ds\Map Ds\Map::union(Ds\Map $map)
```

Creates a new map that contains the pairs of the current instance as well as the pairs of another `$map`.

A ∪ B = {x: x ∈ A ∨ x ∈ B}

> Values of the current instance will be overwritten by those provided where keys are equal.

## Parameters

- **`$map`** — The other map, to combine with the current instance.

## Return Values

A new map containing all the pairs of the current instance as well as another `$map`.

## See Also

[Union]() on Wikipedia

## Examples

**`Ds\Map::union()` example**

```php


<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 3, "c" => 4, "d" => 5]);

print_r($a->union($b));
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
            [value] => 3
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 4
        )

    [3] => Ds\Pair Object
        (
            [key] => d
            [value] => 5
        )

)

   
```
