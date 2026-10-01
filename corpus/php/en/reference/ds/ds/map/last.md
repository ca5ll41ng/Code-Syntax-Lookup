---
id: "en-php-function-ds-map-last"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::last"
title: "Returns the last pair of the map"
signature: "public Ds\\Pair Ds\\Map::last()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last pair of the map

## Description

```php
public Ds\Pair Ds\Map::last()
```

Returns the last pair of the map.

## Parameters

This function has no parameters.

## Return Values

The last pair of the map.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Map::last()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->last());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Pair)#2 (2) {
  ["key"]=>
  string(1) "c"
  ["value"]=>
  int(3)
}

   
```
