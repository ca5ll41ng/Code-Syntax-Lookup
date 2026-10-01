---
id: "en-php-function-ds-deque-rotate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::rotate"
title: "Rotates the deque by a given number of rotations"
signature: "public void Ds\\Deque::rotate(int $rotations)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.rotate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rotates the deque by a given number of rotations

## Description

```php
public void Ds\Deque::rotate(int $rotations)
```

Rotates the deque by a given number of rotations, which is equivalent to successively calling $deque->push($deque->shift()) if the number of rotations is positive, or $deque->unshift($deque->pop()) if negative.

## Parameters

- **`$rotations`** — The number of times the deque should be rotated.

## Return Values

No value is returned.. The deque of the current instance will be rotated.

## Examples

**`Ds\Deque::rotate()` example**

```php


<?php
$deque = new \Ds\Deque(["a", "b", "c", "d"]);

$deque->rotate(1);  // "a" is shifted, then pushed.
print_r($deque);

$deque->rotate(2);  // "b" and "c" are both shifted, then pushed.
print_r($deque);
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
Ds\Deque Object
(
    [0] => d
    [1] => a
    [2] => b
    [3] => c
)

   
```
