---
id: "en-php-function-ds-map-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\Map::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\Map::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\Map::capacity()` example**

```php


<?php
$map = new \Ds\Map();
var_dump($map->capacity());
?>

   
```

The above example will output something similar to:

```text


int(16)

   
```
