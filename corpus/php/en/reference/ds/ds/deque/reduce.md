---
id: "en-php-function-ds-deque-reduce"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::reduce"
title: "Reduces the deque to a single value using a callback function"
signature: "public mixed Ds\\Deque::reduce(callable $callback, [mixed $initial = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.reduce.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reduces the deque to a single value using a callback function

## Description

```php
public mixed Ds\Deque::reduce(callable $callback, [mixed $initial = ...])
```

Reduces the deque to a single value using a callback function.

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

**`Ds\Deque::reduce()` with initial value example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

$callback = function($carry, $value) {
    return $carry * $value;
};

var_dump($deque->reduce($callback, 5));

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

**`Ds\Deque::reduce()` without an initial value example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

var_dump($deque->reduce(function($carry, $value) {
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
