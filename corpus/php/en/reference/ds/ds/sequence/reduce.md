---
id: "en-php-function-ds-sequence-reduce"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::reduce"
title: "Reduces the sequence to a single value using a callback function"
signature: "abstract public mixed Ds\\Sequence::reduce(callable $callback, [mixed $initial = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.reduce.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reduces the sequence to a single value using a callback function

## Description

```php
abstract public mixed Ds\Sequence::reduce(callable $callback, [mixed $initial = ...])
```

Reduces the sequence to a single value using a callback function.

## Parameters

- **`$callback`**
  ```php
  mixed {callback}(mixed $carry, mixed $value)
  ```


  - **`$carry`** — The return value of the previous callback, or `$initial` if it's the first iteration.
  - **`$value`** — The value of the current iteration.


- **`$initial`** — The initial value of the carry value. Can be `null`.

## Return Values

The return value of the final callback.

## Examples

**`Ds\Sequence::reduce()` with initial value example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);

$callback = function($carry, $value) {
    return $carry * $value;
};

var_dump($sequence->reduce($callback, 5));

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

**`Ds\Sequence::reduce()` without an initial value example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);

var_dump($sequence->reduce(function($carry, $value) {
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
