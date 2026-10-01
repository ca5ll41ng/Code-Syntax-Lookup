---
id: "en-php-function-ds-deque-contains"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::contains"
title: "Determines if the deque contains given values"
signature: "public bool Ds\\Deque::contains(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if the deque contains given values

## Description

```php
public bool Ds\Deque::contains(mixed $values)
```

Determines if the deque contains all values.

## Parameters

- **`$values`** — Values to check.

## Return Values

`false` if any of the provided `$values` are not in the deque, `true` otherwise.

## Examples

**`Ds\Deque::contains()` example**

```php


<?php
$deque = new \Ds\Deque(['a', 'b', 'c', 1, 2, 3]);

var_dump($deque->contains('a'));                // true
var_dump($deque->contains('a', 'b'));           // true
var_dump($deque->contains('c', 'd'));           // false

var_dump($deque->contains(...['c', 'b', 'a'])); // true

// Always strict
var_dump($deque->contains(1));                  // true
var_dump($deque->contains('1'));                // false

var_dump($deque->contains(...[]));                 // true
?>

   
```

The above example will output something similar to:

```text


bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(false)
bool(true)

   
```
