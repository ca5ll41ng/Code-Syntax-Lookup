---
id: "en-php-function-ds-deque-slice"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::slice"
title: "Returns a sub-deque of a given range"
signature: "public Ds\\Deque Ds\\Deque::slice(int $index, [int $length = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.slice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a sub-deque of a given range

## Description

```php
public Ds\Deque Ds\Deque::slice(int $index, [int $length = ...])
```

Creates a sub-deque of a given range.

## Parameters

- **`$index`** — The index at which the sub-deque starts. — If positive, the deque will start at that index in the deque. If negative, the deque will start that far from the end.
- **`$length`** — If a length is given and is positive, the resulting deque will have up to that many values in it. If the length results in an overflow, only values up to the end of the deque will be included. If a length is given and is negative, the deque will stop that many values from the end. If a length is not provided, the resulting deque will contain all values between the index and the end of the deque.

## Return Values

A sub-deque of the given range.

## Examples

**`Ds\Deque::slice()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c", "d", "e"]);

// Slice from 2 onwards
print_r($deque->slice(2));

// Slice from 1, for a length of 3
print_r($deque->slice(1, 3));

// Slice from 1 onwards
print_r($deque->slice(1));

// Slice from 2 from the end onwards
print_r($deque->slice(-2));

// Slice from 1 to 1 from the end
print_r($deque->slice(1, -1));
?>

   
```

The above example will output something similar to:

```text


Ds\Deque Object
(
    [0] => c
    [1] => d
    [2] => e
)
Ds\Deque Object
(
    [0] => b
    [1] => c
    [2] => d
)
Ds\Deque Object
(
    [0] => b
    [1] => c
    [2] => d
    [3] => e
)
Ds\Deque Object
(
    [0] => d
    [1] => e
)
Ds\Deque Object
(
    [0] => b
    [1] => c
    [2] => d
)


   
```
