---
id: "en-php-function-ds-map-reverse"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::reverse"
title: "Reverses the map in-place"
signature: "public void Ds\\Map::reverse()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.reverse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reverses the map in-place

## Description

```php
public void Ds\Map::reverse()
```

Reverses the map in-place.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Map::reverse()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$map->reverse();

print_r($map);
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
