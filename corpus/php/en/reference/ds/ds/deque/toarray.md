---
id: "en-php-function-ds-deque-toarray"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Deque::toArray"
title: "Converts the deque to an `array`"
signature: "public array Ds\\Deque::toArray()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-deque.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts the deque to an `array`

## Description

```php
public array Ds\Deque::toArray()
```

Converts the deque to an `array`.

> Casting to an `array` is not supported yet.

## Parameters

This function has no parameters.

## Return Values

An `array` containing all the values in the same order as the deque.

## Examples

**`Ds\Deque::toArray()` example**

```php


<?php
$deque = new \Ds\Deque([1, 2, 3]);

var_dump($deque->toArray());
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
