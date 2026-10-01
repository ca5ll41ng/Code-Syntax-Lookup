---
id: "en-php-function-ds-map-putall"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::putAll"
title: "Associates all key-value pairs of a traversable object or array"
signature: "public void Ds\\Map::putAll(mixed $pairs)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.putall.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Associates all key-value pairs of a traversable object or array

## Description

```php
public void Ds\Map::putAll(mixed $pairs)
```

Associates all key-value `$pairs` of a `traversable` object or `array`.

> Keys of type `object` are supported. If an object implements `Ds\Hashable`, equality will be determined by the object's equals function. If an object does not implement `Ds\Hashable`, objects must be references to the same instance to be considered equal.

## Parameters

- **`$pairs`** — `traversable` object or `array`.

## Return Values

No value is returned.

## Examples

**`Ds\Map::putAll()` example**

```php


<?php
$map = new \Ds\Map();

$map->putAll([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);

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
