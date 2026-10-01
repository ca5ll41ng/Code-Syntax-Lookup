---
id: "en-php-function-ds-vector-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::copy"
title: "Returns a shallow copy of the vector"
signature: "public Ds\\Vector Ds\\Vector::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the vector

## Description

```php
public Ds\Vector Ds\Vector::copy()
```

Returns a shallow copy of the vector.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the vector.

## Examples

**`Ds\Vector::copy()` example**

```php


<?php
$a = new \Ds\Vector([1, 2, 3]);
$b = $a->copy();

// Updating the copy doesn't affect the original
$b->push(4);

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)

   
```
