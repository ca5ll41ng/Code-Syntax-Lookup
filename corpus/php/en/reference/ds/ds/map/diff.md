---
id: "en-php-function-ds-map-diff"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::diff"
title: "Creates a new map using keys that aren't in another map"
signature: "public Ds\\Map Ds\\Map::diff(Ds\\Map $map)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.diff.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new map using keys that aren't in another map

## Description

```php
public Ds\Map Ds\Map::diff(Ds\Map $map)
```

Returns the result of removing all keys from the current instance that are present in a given `$map`.

A \ B = {x ∈ A | x ∉ B}

## Parameters

- **`$map`** — The map containing the keys to exclude in the resulting map.

## Return Values

The result of removing all keys from the current instance that are present in a given `$map`.

## See Also

[Complement]() on Wikipedia

## Examples

**`Ds\Map::diff()` example**

```php


<?php
$a = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$b = new \Ds\Map(["b" => 4, "c" => 5, "d" => 6]);

var_dump($a->diff($b));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Map)#3 (1) {
  [0]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    string(1) "a"
    ["value"]=>
    int(1)
  }
}

   
```
