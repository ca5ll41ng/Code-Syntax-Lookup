---
id: "en-php-function-ds-sequence-filter"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::filter"
title: "Creates a new sequence using a `callable` to determine which values to include"
signature: "abstract public Ds\\Sequence Ds\\Sequence::filter([callable $callback = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new sequence using a `callable` to determine which values to include

## Description

```php
abstract public Ds\Sequence Ds\Sequence::filter([callable $callback = ...])
```

Creates a new sequence using a `callable` to determine which values to include.

## Parameters

- **`$callback`** — `bool` `{callback}()` `mixed``$value` — Optional `callable` which returns `true` if the value should be included, `false` otherwise. — If a callback is not provided, only values which are `true` (see converting to boolean) will be included.

## Return Values

A new sequence containing all the values for which either the `$callback` returned `true`, or all values that convert to `true` if a `$callback` was not provided.

## Examples

**`Ds\Sequence::filter()` example using callback function**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3, 4, 5]);

var_dump($sequence->filter(function($value) {
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

**`Ds\Sequence::filter()` example without a callback function**

```php


<?php
$sequence = new \Ds\Vector([0, 1, 'a', true, false]);

var_dump($sequence->filter());
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
