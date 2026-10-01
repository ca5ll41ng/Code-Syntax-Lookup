---
id: "en-php-function-ds-vector-rotate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::rotate"
title: "Rotates the vector by a given number of rotations"
signature: "public void Ds\\Vector::rotate(int $rotations)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.rotate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rotates the vector by a given number of rotations

## Description

```php
public void Ds\Vector::rotate(int $rotations)
```

Rotates the vector by a given number of rotations, which is equivalent to successively calling $vector->push($vector->shift()) if the number of rotations is positive, or $vector->unshift($vector->pop()) if negative.

## Parameters

- **`$rotations`** — The number of times the vector should be rotated.

## Return Values

No value is returned.. The vector of the current instance will be rotated.

## Examples

**`Ds\Vector::rotate()` example**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c", "d"]);

$vector->rotate(1);  // "a" is shifted, then pushed.
print_r($vector);

$vector->rotate(2);  // "b" and "c" are both shifted, then pushed.
print_r($vector);
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
