---
id: "en-php-function-ds-vector-pop"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::pop"
title: "Removes and returns the last value"
signature: "public mixed Ds\\Vector::pop()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.pop.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the last value

## Description

```php
public mixed Ds\Vector::pop()
```

Removes and returns the last value.

## Parameters

This function has no parameters.

## Return Values

The removed last value.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Vector::pop()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);

var_dump($vector->pop());
var_dump($vector->pop());
var_dump($vector->pop());
?>

   
```

The above example will output something similar to:

```text


int(3)
int(2)
int(1)

   
```
