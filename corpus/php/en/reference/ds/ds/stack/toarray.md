---
id: "en-php-function-ds-stack-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::toArray"
title: "Converts the stack to an `array`"
signature: "public array Ds\\Stack::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the stack to an `array`

## Description

```php
public array Ds\Stack::toArray()
```

Converts the stack to an `array`.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the stack.

## Examples

**`Ds\Stack::toArray()` example**

```php


<?php
$stack = new \Ds\Stack([1, 2, 3]);

var_dump($stack->toArray());
?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  int(3)
  [1]=>
  int(2)
  [2]=>
  int(1)
}

   
```
