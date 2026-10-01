---
id: "en-php-function-ds-map-intersect"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::intersect"
title: "Creates a new map by intersecting keys with another map"
signature: "public Ds\\Map Ds\\Map::intersect(Ds\\Map $map)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.intersect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new map by intersecting keys with another map

## Description

```php
public Ds\Map Ds\Map::intersect(Ds\Map $map)
```

Creates a new map containing the pairs of the current instance whose keys are also present in the given `$map`. In other words, returns a copy of the current instance with all keys removed that are not also in the other `$map`.

A ∩ B = {x : x ∈ A ∧ x ∈ B}

> Values from the current instance will be kept.

## Parameters

- **`$map`** — The other map, containing the keys to intersect with.

## Return Values

The key intersection of the current instance and another `$map`.

## See Also

[Intersection]() on Wikipedia

## Examples

**`Ds\Map::intersect()` example**

```php


<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 4, "c" => 5, "d" => 6]);

var_dump($a->intersect($b));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Map)#3 (2) {
  [0]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    string(1) "b"
    ["value"]=>
    int(2)
  }
  [1]=>
  object(Ds\Pair)#5 (2) {
    ["key"]=>
    string(1) "c"
    ["value"]=>
    int(3)
  }
}

   
```
