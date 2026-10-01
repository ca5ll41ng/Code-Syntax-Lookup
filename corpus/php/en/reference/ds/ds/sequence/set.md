---
id: "en-php-function-ds-sequence-set"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::set"
title: "Updates a value at a given index"
signature: "abstract public void Ds\\Sequence::set(int $index, mixed $value)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates a value at a given index

## Description

```php
abstract public void Ds\Sequence::set(int $index, mixed $value)
```

Updates a value at a given index.

## Parameters

- **`$index`** — The index of the value to update.
- **`$value`** — The new value.

## Return Values

No value is returned.

## Errors/Exceptions

OutOfRangeException if the index is not valid.

## Examples

**`Ds\Sequence::set()` example**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

$sequence->set(1, "_");
print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => _
    [2] => c
)

   
```

**`Ds\Sequence::set()` example using array syntax**

```php


<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

$sequence[1] = "_";
print_r($sequence);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => _
    [2] => c
)

   
```
