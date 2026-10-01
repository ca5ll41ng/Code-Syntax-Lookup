---
id: "en-php-function-ds-sequence-rotate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::rotate"
title: "Rotates the sequence by a given number of rotations"
signature: "abstract public void Ds\\Sequence::rotate(int $rotations)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.rotate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rotates the sequence by a given number of rotations

## Description

```php
abstract public void Ds\Sequence::rotate(int $rotations)
```

Rotates the sequence by a given number of rotations, which is equivalent to successively calling $sequence->push($sequence->shift()) if the number of rotations is positive, or $sequence->unshift($sequence->pop()) if negative.

## Parameters

- **`$rotations`** — The number of times the sequence should be rotated.

## Return Values

No value is returned.. The sequence of the current instance will be rotated.

## Examples

**`Ds\Sequence::rotate()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c", "d"]);

$sequence->rotate(1);  // "a" is shifted, then pushed.
print_r($sequence);

$sequence->rotate(2);  // "b" and "c" are both shifted, then pushed.
print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


(
    [0] => b
    [1] => c
    [2] => d
    [3] => a
)
Ds\Vector Object
(
    [0] => d
    [1] => a
    [2] => b
    [3] => c
)

   
```
