---
id: "en-php-function-ds-vector-map"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::map"
title: "Returns the result of applying a callback to each value"
signature: "public Ds\\Vector Ds\\Vector::map(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of applying a callback to each value

## Description

```php
public Ds\Vector Ds\Vector::map(callable $callback)
```

Returns the result of applying a `$callback` function to each value in the vector.

## Parameters

- **`$callback`** — `mixed` `{callback}()` `mixed``$value` — A `callable` to apply to each value in the vector. — The callable should return what the new value will be in the new vector.

## Return Values

The result of applying a `$callback` to each value in the vector.

> The values of the current instance won't be affected.

## Examples

**`Ds\Vector::map()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);

print_r($vector->map(function($value) { return $value * 2; }));
print_r($vector);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)

   
```
