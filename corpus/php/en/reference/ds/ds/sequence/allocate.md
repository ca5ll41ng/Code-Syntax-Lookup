---
id: "en-php-function-ds-sequence-allocate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Sequence::allocate"
title: "Allocates enough memory for a required capacity"
signature: "abstract public void Ds\\Sequence::allocate(int $capacity)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-sequence.allocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allocates enough memory for a required capacity

## Description

```php
abstract public void Ds\Sequence::allocate(int $capacity)
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal buffer as values are added.

## Parameters

- **`$capacity`** — The number of values for which capacity should be allocated.
  > Capacity will stay the same if this value is less than or equal to the current capacity.



## Return Values

No value is returned.

## Examples

**`Ds\Sequence::allocate()` example**

```php


<?php
$sequence = new \Ds\Vector();
var_dump($sequence->capacity());

$vector->allocate(100);
var_dump($sequence->capacity());
?>

   
```

The above example will output something similar to:

```text


int(10)
int(100)

   
```
