---
id: "en-php-function-ds-map-sum"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::sum"
title: "Returns the sum of all values in the map"
signature: "public int|float Ds\\Map::sum()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the sum of all values in the map

## Description

```php
public int|float Ds\Map::sum()
```

Returns the sum of all values in the map.

> Arrays and objects are considered equal to zero when calculating the sum.

## Parameters

This function has no parameters.

## Return Values

The sum of all the values in the map as either a `float` or `int` depending on the values in the map.

## Examples

**`Ds\Map::sum()` integer example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
var_dump($map->sum());
?>

   
```

The above example will output something similar to:

```text


int(6)

   
```

**`Ds\Map::sum()` float example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2.5, "c" => 3]);
var_dump($map->sum());
?>

   
```

The above example will output something similar to:

```text


float(6.5)

   
```
