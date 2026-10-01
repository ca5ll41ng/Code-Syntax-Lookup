---
id: "en-php-function-ds-vector-reversed"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::reversed"
title: "Returns a reversed copy"
signature: "public Ds\\Vector Ds\\Vector::reversed()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.reversed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a reversed copy

## Description

```php
public Ds\Vector Ds\Vector::reversed()
```

Returns a reversed copy of the vector.

## Parameters

This function has no parameters.

## Return Values

A reversed copy of the vector.

> The current instance is not affected.

## Examples

**`Ds\Vector::reversed()` example**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

print_r($vector->reversed());
print_r($vector);
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
