---
id: "en-php-function-ds-map-pairs"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::pairs"
title: "Returns a sequence containing all the pairs of the map"
signature: "public Ds\\Sequence Ds\\Map::pairs()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.pairs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sequence containing all the pairs of the map

## Description

```php
public Ds\Sequence Ds\Map::pairs()
```

Returns a `Ds\Sequence` containing all the pairs of the map.

## Parameters

This function has no parameters.

## Return Values

`Ds\Sequence` containing all the pairs of the map.

## Examples

**`Ds\Map::pairs()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->pairs());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#8 (3) {
  [0]=>
  object(Ds\Pair)#5 (2) {
    ["key"]=>
    string(1) "a"
    ["value"]=>
    int(1)
  }
  [1]=>
  object(Ds\Pair)#6 (2) {
    ["key"]=>
    string(1) "b"
    ["value"]=>
    int(2)
  }
  [2]=>
  object(Ds\Pair)#7 (2) {
    ["key"]=>
    string(1) "c"
    ["value"]=>
    int(3)
  }
}

   
```
