---
id: "en-php-function-ds-vector-last"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::last"
title: "Returns the last value"
signature: "public mixed Ds\\Vector::last()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.last.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the last value

## Description

```php
public mixed Ds\Vector::last()
```

Returns the last value in the vector.

## Parameters

This function has no parameters.

## Return Values

The last value in the vector.

## Errors/Exceptions

`UnderflowException` if empty.

## Examples

**`Ds\Vector::last()` example**

```php


<?php
$vector = new \Ds\Vector([1, 2, 3]);
var_dump($vector->last());
?>

   
```

The above example will output something similar to:

```text


int(3)

   
```
