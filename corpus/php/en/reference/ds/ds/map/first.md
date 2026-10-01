---
id: "en-php-function-ds-map-first"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::first"
title: "Returns the first pair in the map"
signature: "public Ds\\Pair Ds\\Map::first()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the first pair in the map

## Description

```php
public Ds\Pair Ds\Map::first()
```

Returns the first pair in the map.

## Parameters

This function has no parameters.

## Return Values

The first pair in the map.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Map::first()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->first());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Pair)#2 (2) {
  ["key"]=>
  string(1) "a"
  ["value"]=>
  int(1)
}

   
```
