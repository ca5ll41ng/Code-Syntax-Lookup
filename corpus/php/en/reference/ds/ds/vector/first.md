---
id: "en-php-function-ds-vector-first"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::first"
title: "Returns the first value in the vector"
signature: "public mixed Ds\\Vector::first()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.first.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the first value in the vector

## Description

```php
public mixed Ds\Vector::first()
```

Returns the first value in the vector.

## Parameters

This function has no parameters.

## Return Values

The first value in the vector.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Vector::first()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector->first());
?>

   
```

The above example will output something similar to:

```text


int(1)

   
```
