---
id: "en-php-function-ds-vector-shift"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::shift"
title: "Removes and returns the first value"
signature: "public mixed Ds\\Vector::shift()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.shift.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes and returns the first value

## Description

```php
public mixed Ds\Vector::shift()
```

Removes and returns the first value.

## Parameters

This function has no parameters.

## Return Values

The first value, which was removed.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Vector::shift()` example**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

var_dump($vector->shift());
var_dump($vector->shift());
var_dump($vector->shift());
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
