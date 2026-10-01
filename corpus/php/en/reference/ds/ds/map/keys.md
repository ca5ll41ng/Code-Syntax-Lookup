---
id: "en-php-function-ds-map-keys"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::keys"
title: "Returns a set of the map's keys"
signature: "public Ds\\Set Ds\\Map::keys()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.keys.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a set of the map's keys

## Description

```php
public Ds\Set Ds\Map::keys()
```

Returns a set containing all the keys of the map, in the same order.

## Parameters

This function has no parameters.

## Return Values

A `Ds\Set` containing all the keys of the map.

## Examples

**`Ds\Map::keys()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->keys());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#2 (3) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
  [2]=>
  string(1) "c"
}

   
```
