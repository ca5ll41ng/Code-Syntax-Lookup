---
id: "en-php-function-ds-set-filter"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::filter"
title: "Creates a new set using a `callable` to determine which values to include"
signature: "public Ds\\Set Ds\\Set::filter([callable $callback = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new set using a `callable` to determine which values to include

## Description

```php
public Ds\Set Ds\Set::filter([callable $callback = ...])
```

Creates a new set using a `callable` to determine which values to include.

## Parameters

- **`$callback`** — `bool` `{callback}()` `mixed``$value` — Optional `callable` which returns `true` if the value should be included, `false` otherwise. — If a callback is not provided, only values which are `true` (see converting to boolean) will be included.

## Return Values

A new set containing all the values for which either the `$callback` returned `true`, or all values that convert to `true` if a `$callback` was not provided.

## Examples

**`Ds\Set::filter()` example using callback function**

```php


<?php
$set = new \Ds\Set([1, 2, 3, 4, 5]);

var_dump($set->filter(function($value) {
    return $value % 2 == 0;
}));
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#3 (2) {
  [0]=>
  int(2)
  [1]=>
  int(4)
}

   
```

**`Ds\Set::filter()` example without a callback function**

```php


<?php
$set = new \Ds\Set([0, 1, 'a', true, false]);

var_dump($set->filter());
?>

   
```

The above example will output something similar to:

```text


object(Ds\Set)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  string(1) "a"
  [2]=>
  bool(true)
}

   
```
