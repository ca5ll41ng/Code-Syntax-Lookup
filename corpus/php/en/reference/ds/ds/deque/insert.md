---
id: "en-php-function-ds-deque-insert"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::insert"
title: "Inserts values at a given index"
signature: "public void Ds\\Deque::insert(int $index, mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts values at a given index

## Description

```php
public void Ds\Deque::insert(int $index, mixed $values)
```

Inserts values into the deque at a given index.

## Parameters

- **`$index`** — The index at which to insert. 0 <= index <= count
  > You can insert at the index equal to the number of values.


- **`$values`** — The value or values to insert.

## Return Values

No value is returned.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Deque::insert()` example**

```php


<?php
$deque = new \Ds\Deque();

$deque->insert(0, "e");             // [e]
$deque->insert(1, "f");             // [e, f]
$deque->insert(2, "g");             // [e, f, g]
$deque->insert(0, "a", "b");        // [a, b, e, f, g]
$deque->insert(2, ...["c", "d"]);   // [a, b, c, d, e, f, g]

var_dump($deque);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Deque)#1 (7) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
  [2]=>
  string(1) "c"
  [3]=>
  string(1) "d"
  [4]=>
  string(1) "e"
  [5]=>
  string(1) "f"
  [6]=>
  string(1) "g"
}

   
```
