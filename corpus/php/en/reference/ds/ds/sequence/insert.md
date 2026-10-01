---
id: "en-php-function-ds-sequence-insert"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::insert"
title: "Inserts values at a given index"
signature: "abstract public void Ds\\Sequence::insert(int $index, mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inserts values at a given index

## Description

```php
abstract public void Ds\Sequence::insert(int $index, mixed $values)
```

Inserts values into the sequence at a given index.

## Parameters

- **`$index`** — The index at which to insert. 0 <= index <= count
  > You can insert at the index equal to the number of values.


- **`$values`** — The value or values to insert.

## Return Values

No value is returned.

## Errors/Exceptions

OutOfRangeException if the index is not valid.

## Examples

**`Ds\Sequence::insert()` example**

```php


<?php
$sequence = new \Ds\Vector();

$sequence->insert(0, "e");             // [e]
$sequence->insert(1, "f");             // [e, f]
$sequence->insert(2, "g");             // [e, f, g]
$sequence->insert(0, "a", "b");        // [a, b, e, f, g]
$sequence->insert(2, ...["c", "d"]);   // [a, b, c, d, e, f, g]

var_dump($sequence);
?>

   
```

The above example will output something similar to:

```text


object(Ds\Vector)#1 (7) {
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
