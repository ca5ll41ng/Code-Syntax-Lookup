---
id: "en-php-function-ds-map-apply"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::apply"
title: "Updates all values by applying a callback function to each value"
signature: "public void Ds\\Map::apply(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.apply.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates all values by applying a callback function to each value

## Description

```php
public void Ds\Map::apply(callable $callback)
```

Updates all values by applying a `$callback` function to each value in the map.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$key` `mixed``$value` — A `callable` to apply to each value in the map. — The callback should return what the value should be replaced by.

## Return Values

No value is returned.

## Examples

**`Ds\Map::apply()` example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);
$map->apply(function($key, $value) { return $value * 2; });

print_r($map);
?>

   
```

The above example will output something similar to:

```text


Ds\Map Object
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

   
```
