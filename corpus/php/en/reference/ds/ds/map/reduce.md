---
id: "en-php-function-ds-map-reduce"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Map::reduce"
title: "Reduces the map to a single value using a callback function"
signature: "public mixed Ds\\Map::reduce(callable $callback, [mixed $initial = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-map.reduce.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reduces the map to a single value using a callback function

## Description

```php
public mixed Ds\Map::reduce(callable $callback, [mixed $initial = ...])
```

Reduces the map to a single value using a callback function.

## Parameters

- **`$callback`**
  ```php
  mixed {callback}(mixed $carry, mixed $key, mixed $value)
  ```


  - **`$carry`** — The return value of the previous callback, or `$initial` if it's the first iteration.
  - **`$key`** — The key of the current iteration.
  - **`$value`** — The value of the current iteration.


- **`$initial`** — The initial value of the carry value. Can be `null`.

## Return Values

The return value of the final callback.

## Examples

**`Ds\Map::reduce()` with initial value example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

$callback = function($carry, $key, $value) {
    return $carry * $value;
};

var_dump($map->reduce($callback, 5));

// Iterations:
//
// $carry = $initial = 5
//
// $carry = $carry * 1 =  5
// $carry = $carry * 2 = 10
// $carry = $carry * 3 = 30
?>

   
```

The above example will output something similar to:

```text


int(30)

   
```

**`Ds\Map::reduce()` without an initial value example**

```php


<?php
$map = new \Ds\Map(["a" => 1, "b" => 2, "c" => 3]);

var_dump($map->reduce(function($carry, $key, $value) {
    return $carry + $value + 5;
}));

// Iterations:
//
// $carry = $initial = null
//
// $carry = $carry + 1 + 5 =  6
// $carry = $carry + 2 + 5 = 13
// $carry = $carry + 3 + 5 = 21
?>

   
```

The above example will output something similar to:

```text


int(21)

   
```
