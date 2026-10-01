---
id: "en-php-function-ds-map-haskey"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::hasKey"
title: "Determines whether the map contains a given key"
signature: "public bool Ds\\Map::hasKey(mixed $key)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.haskey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines whether the map contains a given key

## Description

```php
public bool Ds\Map::hasKey(mixed $key)
```

Determines whether the map contains a given key.

## Parameters

- **`$key`** — The key to look for.

## Return Values

Returns `true` if the key could be found, `false` otherwise.

## Examples

**`Ds\Map::hasKey()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->hasKey("a")); // true
var_dump($map->hasKey("e")); // false
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(false)

   
```
