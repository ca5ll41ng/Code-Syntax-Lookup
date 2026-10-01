---
id: "en-php-function-ds-set-slice"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::slice"
title: "Returns a sub-set of a given range"
signature: "public Ds\\Set Ds\\Set::slice(int $index, [int $length = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.slice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sub-set of a given range

## Description

```php
public Ds\Set Ds\Set::slice(int $index, [int $length = ...])
```

Creates a sub-set of a given range.

## Parameters

- **`$index`** — The index at which the sub-set starts. — If positive, the set will start at that index in the set. If negative, the set will start that far from the end.
- **`$length`** — If a length is given and is positive, the resulting set will have up to that many values in it. If the length results in an overflow, only values up to the end of the set will be included. If a length is given and is negative, the set will stop that many values from the end. If a length is not provided, the resulting set will contain all values between the index and the end of the set.

## Return Values

A sub-set of the given range.

## Examples

**`Ds\Set::slice()` example**

```php


<?php
$set = new \Ds\Set(["a", "b", "c", "d", "e"]);

// Slice from 2 onwards
print_r($set->slice(2));

// Slice from 1, for a length of 3
print_r($set->slice(1, 3));

// Slice from 1 onwards
print_r($set->slice(1));

// Slice from 2 from the end onwards
print_r($set->slice(-2));

// Slice from 1 to 1 from the end
print_r($set->slice(1, -1));
?>

   
```

The above example will output something similar to:

```text


Ds\Set Object
(
    [0] => c
    [1] => d
    [2] => e
)
Ds\Set Object
(
    [0] => b
    [1] => c
    [2] => d
)
Ds\Set Object
(
    [0] => b
    [1] => c
    [2] => d
    [3] => e
)
Ds\Set Object
(
    [0] => d
    [1] => e
)
Ds\Set Object
(
    [0] => b
    [1] => c
    [2] => d
)


   
```
