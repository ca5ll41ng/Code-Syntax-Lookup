---
id: "en-php-function-ds-set-map"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::map"
title: "Returns the result of applying a callback to each value"
signature: "public Ds\\Set Ds\\Set::map(callable $callback)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.map.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of applying a callback to each value

## Description

```php
public Ds\Set Ds\Set::map(callable $callback)
```

Returns the result of applying a `$callback` function to each value in the set.

## Parameters

- **`$callback`** — The callback to apply to each value in the set must have the following signature: `mixed` `{callback}()` `mixed``$value`

## Return Values

Returns a new `Ds\Set` instance where each value is the result of applying the `$callback` to each value of the set.

## Examples

**`Ds\Set::map()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->map(function($value) { return $value * 2; }));
var_dump($set);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#3 (3) {
  [0]=>
  int(2)
  [1]=>
  int(4)
  [2]=>
  int(6)
}
object(Ds\Set)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
