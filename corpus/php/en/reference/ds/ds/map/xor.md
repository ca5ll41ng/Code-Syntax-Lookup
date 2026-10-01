---
id: "en-php-function-ds-map-xor"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::xor"
title: "Creates a new map using keys of either the current instance or of another map, but not of both"
signature: "public Ds\\Map Ds\\Map::xor(Ds\\Map $map)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.xor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new map using keys of either the current instance or of another map, but not of both

## Description

```php
public Ds\Map Ds\Map::xor(Ds\Map $map)
```

Creates a new map containing keys of the current instance as well as another `$map`, but not of both.

A ⊖ B = {x : x ∈ (A \ B) ∪ (B \ A)}

## Parameters

- **`$map`** — The other map.

## Return Values

A new map containing keys in the current instance as well as another `$map`, but not in both.

## See Also

[Symmetric Difference]() on Wikipedia

## Examples

**`Ds\Map::xor()` example**

```php


<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 4, "c" => 5, "d" => 6]);

print_r($a->xor($b));
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
            [key] => d
            [value] => 6
        )

)

   
```
