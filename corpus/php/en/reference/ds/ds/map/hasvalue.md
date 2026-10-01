---
id: "en-php-function-ds-map-hasvalue"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::hasValue"
title: "Determines whether the map contains a given value"
signature: "public bool Ds\\Map::hasValue(mixed $value)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.hasvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines whether the map contains a given value

## Description

```php
public bool Ds\Map::hasValue(mixed $value)
```

Determines whether the map contains a given value.

## Parameters

- **`$value`** — The value to look for.

## Return Values

Returns `true` if the value could be found, `false` otherwise.

## Examples

**`Ds\Map::hasValue()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->hasValue(1)); // true
var_dump($map->hasValue(4)); // false
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(false)

   
```
