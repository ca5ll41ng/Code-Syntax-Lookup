---
id: "en-php-function-ds-sequence-reverse"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::reverse"
title: "Reverses the sequence in-place"
signature: "abstract public void Ds\\Sequence::reverse()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.reverse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reverses the sequence in-place

## Description

```php
abstract public void Ds\Sequence::reverse()
```

Reverses the sequence in-place.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Sequence::reverse()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);
$sequence->reverse();

print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => c
    [1] => b
    [2] => a
)

   
```
