---
id: "en-php-function-ds-vector-allocate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::allocate"
title: "Allocates enough memory for a required capacity"
signature: "public void Ds\\Vector::allocate(int $capacity)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.allocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allocates enough memory for a required capacity

## Description

```php
public void Ds\Vector::allocate(int $capacity)
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal buffer as values are added.

## Parameters

- **`$capacity`** — The number of values for which capacity should be allocated.
  > Capacity will stay the same if this value is less than or equal to the current capacity.



## Return Values

No value is returned.

## Examples

**`Ds\Vector::allocate()` example**

```php


<?php
$vector = new \Ds\Vector();
var_dump($vector->capacity());

$vector->allocate(100);
var_dump($vector->capacity());
?>

   
```

The above example will output something similar to:

```text


int(10)
int(100)

   
```
