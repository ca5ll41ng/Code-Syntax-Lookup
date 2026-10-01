---
id: "en-php-function-ds-collection-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Collection::toArray"
title: "Converts the collection to an `array`"
signature: "public array Ds\\Collection::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-collection.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the collection to an `array`

## Description

```php
public array Ds\Collection::toArray()
```

Converts the collection to an `array`.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the collection.

## Examples

**`Ds\Collection::toArray()` example**

```php


<?php
$collection = new \Ds\Vector([1, 2, 3]);

var_dump($collection->toArray());
?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}

   
```
