---
id: "en-php-function-ds-vector-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\Vector::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\Vector::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

## Examples

**`Ds\Vector::capacity()` example**

```php


<?php
$vector = new \Ds\Vector();
var_dump($vector->capacity());

$vector->push(...range(1, 50));
var_dump($vector->capacity());

$vector[] = "a";
var_dump($vector->capacity());
?>

   
```

The above example will output something similar to:

```text


int(10)
int(50)
int(75)

   
```
