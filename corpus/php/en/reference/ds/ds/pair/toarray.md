---
id: "en-php-function-ds-pair-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Pair::toArray"
title: "Converts the pair to an `array`"
signature: "public array Ds\\Pair::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-pair.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the pair to an `array`

## Description

```php
public array Ds\Pair::toArray()
```

Converts the pair to an `array`.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the pair.

## Examples

**`Ds\Pair::toArray()` example**

```php


<?php
$pair = new \Ds\Pair("a", 1);

var_dump($pair->toArray());
?>

   
```

The above example will output something similar to:

```text


array(2) {
  ["key"]=>
  string(1) "a"
  ["value"]=>
  int(1)
}

   
```
