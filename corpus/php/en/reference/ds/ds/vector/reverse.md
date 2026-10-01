---
id: "en-php-function-ds-vector-reverse"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::reverse"
title: "Reverses the vector in-place"
signature: "public void Ds\\Vector::reverse()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.reverse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reverses the vector in-place

## Description

```php
public void Ds\Vector::reverse()
```

Reverses the vector in-place.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Vector::reverse()` example**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);
$vector->reverse();

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

   
```
