---
id: "en-php-function-ds-vector-filter"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::filter"
title: "Creates a new vector using a `callable` to determine which values to include"
signature: "public Ds\\Vector Ds\\Vector::filter([callable $callback = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new vector using a `callable` to determine which values to include

## Description

```php
public Ds\Vector Ds\Vector::filter([callable $callback = ...])
```

Creates a new vector using a `callable` to determine which values to include.

## Parameters

- **`$callback`** — `bool` `{callback}()` `mixed``$value` — Optional `callable` which returns `true` if the value should be included, `false` otherwise. — If a callback is not provided, only values which are `true` (see converting to boolean) will be included.

## Return Values

A new vector containing all the values for which either the `$callback` returned `true`, or all values that convert to `true` if a `$callback` was not provided.

## Examples

**`Ds\Vector::filter()` example using callback function**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3, 4, 5]);

var_dump($vector->filter(function($value) {
    return $value % 2 == 0;
}));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#3 (2) {
  [0]=>
  int(2)
  [1]=>
  int(4)
}

   
```

**`Ds\Vector::filter()` example without a callback function**

```php


<?php
$vector = new \Ds\Vector([0, 1, 'a', true, false]);

var_dump($vector->filter());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  string(1) "a"
  [2]=>
  bool(true)
}

   
```
