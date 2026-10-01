---
id: "en-php-function-ds-sequence-unshift"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::unshift"
title: "Adds values to the front of the sequence"
signature: "abstract public void Ds\\Sequence::unshift([mixed $values = ...])"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.unshift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the front of the sequence

## Description

```php
abstract public void Ds\Sequence::unshift([mixed $values = ...])
```

Adds values to the front of the sequence, moving all the current values forward to make room for the new values.

## Parameters

- **`$values`** — The values to add to the front of the sequence. > Multiple values will be added in the same order that they are passed.

## Return Values

No value is returned.

## Examples

**`Ds\Sequence::unshift()` example**

```php


<?php
$sequence = new \Ds\Vector([1, 2, 3]);

$sequence->unshift("a");
$sequence->unshift("b", "c");

print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => b
    [1] => c
    [2] => a
    [3] => 1
    [4] => 2
    [5] => 3
)

   
```
