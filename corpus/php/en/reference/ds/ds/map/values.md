---
id: "en-php-function-ds-map-values"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::values"
title: "Returns a sequence of the map's values"
signature: "public Ds\\Sequence Ds\\Map::values()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.values.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sequence of the map's values

## Description

```php
public Ds\Sequence Ds\Map::values()
```

Returns a sequence containing all the values of the map, in the same order.

## Parameters

This function has no parameters.

## Return Values

A `Ds\Sequence` containing all the values of the map.

## Examples

**`Ds\Map::values()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->values());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
