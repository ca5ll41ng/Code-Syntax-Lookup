---
id: "en-php-function-ds-sequence-slice"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::slice"
title: "Returns a sub-sequence of a given range"
signature: "abstract public Ds\\Sequence Ds\\Sequence::slice(int $index, [int $length = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.slice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sub-sequence of a given range

## Description

```php
abstract public Ds\Sequence Ds\Sequence::slice(int $index, [int $length = ...])
```

Creates a sub-sequence of a given range.

## Parameters

- **`$index`** — The index at which the sub-sequence starts. — If positive, the sequence will start at that index in the sequence. If negative, the sequence will start that far from the end.
- **`$length`** — If a length is given and is positive, the resulting sequence will have up to that many values in it. If the length results in an overflow, only values up to the end of the sequence will be included. If a length is given and is negative, the sequence will stop that many values from the end. If a length is not provided, the resulting sequence will contain all values between the index and the end of the sequence.

## Return Values

A sub-sequence of the given range.

## Examples

**`Ds\Sequence::slice()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c", "d", "e"]);

// Slice from 2 onwards
print_r($sequence->slice(2));

// Slice from 1, for a length of 3
print_r($sequence->slice(1, 3));

// Slice from 1 onwards
print_r($sequence->slice(1));

// Slice from 2 from the end onwards
print_r($sequence->slice(-2));

// Slice from 1 to 1 from the end
print_r($sequence->slice(1, -1));
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => c
    [1] => d
    [2] => e
)
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => d
)
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => d
    [3] => e
)
Ds\Vector Object
(
    [0] => d
    [1] => e
)
Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => d
)


   
```
