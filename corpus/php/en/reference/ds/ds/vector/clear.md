---
id: "en-php-function-ds-vector-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::clear"
title: "Removes all values"
signature: "public void Ds\\Vector::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Vector::clear()
```

Removes all values from the vector.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Vector::clear()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);
print_r($vector);

$vector->clear();
print_r($vector);
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
)

   
```
