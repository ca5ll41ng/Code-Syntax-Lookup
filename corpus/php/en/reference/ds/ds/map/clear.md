---
id: "en-php-function-ds-map-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::clear"
title: "Removes all values"
signature: "public void Ds\\Map::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Map::clear()
```

Removes all values from the map.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Map::clear()` example**

```php


<?php
$map = new \Ds\Map([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);
print_r($map);

$map->clear();
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
Ds\Map Object
(
)

   
```
