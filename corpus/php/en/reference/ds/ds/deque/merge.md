---
id: "en-php-function-ds-deque-merge"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::merge"
title: "Returns the result of adding all given values to the deque"
signature: "public Ds\\Deque Ds\\Deque::merge(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.merge.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of adding all given values to the deque

## Description

```php
public Ds\Deque Ds\Deque::merge(mixed $values)
```

Returns the result of adding all given values to the deque.

## Parameters

- **`$values`** — A `traversable` object or an `array`.

## Return Values

The result of adding all given values to the deque, effectively the same as adding the values to a copy, then returning that copy.

> The current instance won't be affected.

## Examples

**`Ds\Deque::merge()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

var_dump($deque->merge([4, 5, 6]));
var_dump($deque);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Deque)#2 (6) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
  [3]=>
  int(4)
  [4]=>
  int(5)
  [5]=>
  int(6)
}
object(Ds\Deque)#1 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
