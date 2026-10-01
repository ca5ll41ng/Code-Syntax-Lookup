---
id: "en-php-function-ds-map-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::isEmpty"
title: "Returns whether the map is empty"
signature: "public bool Ds\\Map::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the map is empty

## Description

```php
public bool Ds\Map::isEmpty()
```

Returns whether the map is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the map is empty, `false` otherwise.

## Examples

**`Ds\Map::isEmpty()` example**

```php


<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
