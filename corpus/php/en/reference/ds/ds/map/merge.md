---
id: "en-php-function-ds-map-merge"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::merge"
title: "Returns the result of adding all given associations"
signature: "public Ds\\Map Ds\\Map::merge(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of adding all given associations

## Description

```php
public Ds\Map Ds\Map::merge(mixed $values)
```

Returns the result of associating all keys of a given `traversable` object or `array` with their corresponding values, combined with the current instance.

> Values of the current instance will be overwritten by those provided where keys are equal.

## Parameters

- **`$values`** — A `traversable` object or an `array`.

## Return Values

The result of associating all keys of a given `traversable` object or `array` with their corresponding values, combined with the current instance.

> The current instance won't be affected.

## Examples

**`Ds\Map::merge()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

print_r($map->merge(["a" => 10, "e" => 50]));
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 10
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

    [3] => Ds\Pair Object
        (
            [key] => e
            [value] => 50
        )

)

   
```
