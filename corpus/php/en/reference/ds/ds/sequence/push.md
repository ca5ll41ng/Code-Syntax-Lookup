---
id: "en-php-function-ds-sequence-push"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::push"
title: "Adds values to the end of the sequence"
signature: "abstract public void Ds\\Sequence::push(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the end of the sequence

## Description

```php
abstract public void Ds\Sequence::push(mixed $values)
```

Adds values to the end of the sequence.

## Parameters

- **`$values`** — The values to add.

## Return Values

No value is returned.

## Examples

**`Ds\Sequence::push()` example**

```php


<?php
$sequence = new \Ds\Vector();

$sequence->push("a");
$sequence->push("b");
$sequence->push("c", "d");
$sequence->push(...["e", "f"]);

print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)

   
```
