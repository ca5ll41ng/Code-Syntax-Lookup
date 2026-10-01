---
id: "en-php-function-ds-sequence-contains"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::contains"
title: "Determines if the sequence contains given values"
signature: "abstract public bool Ds\\Sequence::contains(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.contains.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines if the sequence contains given values

## Description

```php
abstract public bool Ds\Sequence::contains(mixed $values)
```

Determines if the sequence contains all values.

## Parameters

- **`$values`** — Values to check.

## Return Values

`false` if any of the provided `$values` are not in the sequence, `true` otherwise.

## Examples

**`Ds\Sequence::contains()` example**

```php


<?php
$sequence = new \Ds\Vector(['a', 'b', 'c', 1, 2, 3]);

var_dump($sequence->contains('a'));                // true
var_dump($sequence->contains('a', 'b'));           // true
var_dump($sequence->contains('c', 'd'));           // false

var_dump($sequence->contains(...['c', 'b', 'a'])); // true

// Always strict
var_dump($sequence->contains(1));                  // true
var_dump($sequence->contains('1'));                // false

var_dump($sequence->contains(...[]));               // true
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
