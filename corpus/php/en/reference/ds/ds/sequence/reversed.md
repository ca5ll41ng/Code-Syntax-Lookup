---
id: "en-php-function-ds-sequence-reversed"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::reversed"
title: "Returns a reversed copy"
signature: "abstract public Ds\\Sequence Ds\\Sequence::reversed()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.reversed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a reversed copy

## Description

```php
abstract public Ds\Sequence Ds\Sequence::reversed()
```

Returns a reversed copy of the sequence.

## Parameters

This function has no parameters.

## Return Values

A reversed copy of the sequence.

> The current instance is not affected.

## Examples

**`Ds\Sequence::reversed()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

print_r($sequence->reversed());
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
Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
)

   
```
