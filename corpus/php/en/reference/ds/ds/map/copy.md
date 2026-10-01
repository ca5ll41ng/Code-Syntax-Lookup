---
id: "en-php-function-ds-map-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::copy"
title: "Returns a shallow copy of the map"
signature: "public Ds\\Map Ds\\Map::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the map

## Description

```php
public Ds\Map Ds\Map::copy()
```

Returns a shallow copy of the map.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the map.

## Examples

**`Ds\Map::copy()` example**

```php


<?php
$map = new \Ds\Map([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);

print_r($map->copy());
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
