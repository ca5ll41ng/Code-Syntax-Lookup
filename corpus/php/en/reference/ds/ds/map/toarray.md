---
id: "en-php-function-ds-map-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::toArray"
title: "Converts the map to an `array`"
signature: "public array Ds\\Map::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the map to an `array`

## Description

```php
public array Ds\Map::toArray()
```

Converts the map to an `array`.

> Maps with non-scalar keys can't be converted to an `array`.

> An `array` will treat all numeric keys as integers, eg. "1" and 1 as keys in the map will only result in 1 being included in the array.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the map.

## Examples

**`Ds\Map::toArray()` example**

```php


<?php
$map = new \Ds\Map([
    "a" => 1,
    "b" => 2,
    "c" => 3,
]);

var_dump($map->toArray());
?>

   
```

The above example will output something similar to:

```text


array(3) {
  ["a"]=>
  int(1)
  ["b"]=>
  int(2)
  ["c"]=>
  int(3)
}

   
```
