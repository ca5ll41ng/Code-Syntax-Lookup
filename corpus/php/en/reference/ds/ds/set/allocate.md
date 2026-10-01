---
id: "en-php-function-ds-set-allocate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::allocate"
title: "Allocates enough memory for a required capacity"
signature: "public void Ds\\Set::allocate(int $capacity)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.allocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allocates enough memory for a required capacity

## Description

```php
public void Ds\Set::allocate(int $capacity)
```

Allocates enough memory for a required capacity.

## Parameters

- **`$capacity`** — The number of values for which capacity should be allocated.
  > Capacity will stay the same if this value is less than or equal to the current capacity.


  > Capacity will always be rounded up to the nearest power of 2.



## Return Values

No value is returned.

## Examples

**`Ds\Set::allocate()` example**

```php


<?php
$set = new \Ds\Set();
var_dump($set->capacity());

$set->allocate(100);
var_dump($set->capacity());
?>

   
```

The above example will output something similar to:

```text


int(16)
int(128)

   
```
