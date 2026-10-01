---
id: "en-php-function-ds-map-map"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::map"
title: "Returns the result of applying a callback to each value"
signature: "public Ds\\Map Ds\\Map::map(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of applying a callback to each value

## Description

```php
public Ds\Map Ds\Map::map(callable $callback)
```

Returns the result of applying a `$callback` function to each value of the map.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$key` `mixed``$value` — A `callable` to apply to each value in the map. — The callable should return what the key will be mapped to in the resulting map.

## Return Values

The result of applying a `$callback` to each value in the map.

> The keys and values of the current instance won't be affected.

## Examples

**`Ds\Map::map()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

print_r($map->map(function($key, $value) { return $value * 2; }));
print_r($map);
?>

   
```

The above example will output something similar to:

```text


(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 2
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 4
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 6
        )

)
Ds\Map Object
(
    [0] => Ds\Pair Object
        (
            [key] => a
            [value] => 1
        )

    [1] => Ds\Pair Object
        (
            [key] => b
            [value] => 2
        )

    [2] => Ds\Pair Object
        (
            [key] => c
            [value] => 3
        )

)

   
```
