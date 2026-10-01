---
id: "en-php-function-ds-map-filter"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::filter"
title: "Creates a new map using a `callable` to determine which pairs to include"
signature: "public Ds\\Map Ds\\Map::filter([callable $callback = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new map using a `callable` to determine which pairs to include

## Description

```php
public Ds\Map Ds\Map::filter([callable $callback = ...])
```

Creates a new map using a `callable` to determine which pairs to include.

## Parameters

- **`$callback`** — `bool` `{callback}()` `mixed``$key` `mixed``$value` — Optional `callable` which returns `true` if the pair should be included, `false` otherwise. — If a callback is not provided, only values which are `true` (see converting to boolean) will be included.

## Return Values

A new map containing all the pairs for which either the `$callback` returned `true`, or all values that convert to `true` if a `$callback` was not provided.

## Examples

**`Ds\Map::filter()` example using callback function**

```php


<?php
$map = new \Ds\Map(["a", "b", "c", "d", "e"]);

var_dump($map->filter(function($key, $value) {
    return $key % 2 == 0;
}));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Map)#3 (3) {
  [0]=>
  object(Ds\Pair)#2 (2) {
    ["key"]=>
    int(0)
    ["value"]=>
    string(1) "a"
  }
  [1]=>
  object(Ds\Pair)#4 (2) {
    ["key"]=>
    int(2)
    ["value"]=>
    string(1) "c"
  }
  [2]=>
  object(Ds\Pair)#5 (2) {
    ["key"]=>
    int(4)
    ["value"]=>
    string(1) "e"
  }
}

   
```

**`Ds\Map::filter()` example without a callback function**

```php


<?php
$map = new \Ds\Map(["a" => 0, "b" => 1, "c" => true, "d" => false]);

var_dump($map->filter());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Map)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  string(1) "a"
  [2]=>
  bool(true)
}

   
```
