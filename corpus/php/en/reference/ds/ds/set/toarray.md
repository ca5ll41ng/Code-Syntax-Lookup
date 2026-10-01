---
id: "en-php-function-ds-set-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Set::toArray"
title: "Converts the set to an `array`"
signature: "public array Ds\\Set::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-set.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the set to an `array`

## Description

```php
public array Ds\Set::toArray()
```

Converts the set to an `array`.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the set.

## Examples

**`Ds\Set::toArray()` example**

```php


<?php
$set = new \Ds\Set([1, 2, 3]);

var_dump($set->toArray());
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
