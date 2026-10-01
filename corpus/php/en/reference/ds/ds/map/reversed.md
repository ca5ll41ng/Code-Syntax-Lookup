---
id: "en-php-function-ds-map-reversed"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::reversed"
title: "Returns a reversed copy"
signature: "public Ds\\Map Ds\\Map::reversed()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.reversed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a reversed copy

## Description

```php
public Ds\Map Ds\Map::reversed()
```

Returns a reversed copy of the map.

## Parameters

This function has no parameters.

## Return Values

A reversed copy of the map.

> The current instance is not affected.

## Examples

**`Ds\Map::reversed()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

print_r($map->reversed());
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

)

   
```
