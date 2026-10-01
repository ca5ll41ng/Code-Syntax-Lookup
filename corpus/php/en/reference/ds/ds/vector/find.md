---
id: "en-php-function-ds-vector-find"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::find"
title: "Attempts to find a value's index"
signature: "public mixed Ds\\Vector::find(mixed $value)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.find.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attempts to find a value's index

## Description

```php
public mixed Ds\Vector::find(mixed $value)
```

Returns the index of the `$value`, or `false` if not found.

## Parameters

- **`$value`** — The value to find.

## Return Values

The index of the value, or `false` if not found.

> Values will be compared by value and by type.

## Examples

**`Ds\Vector::find()` example**

```php


<?php
$vector = new \Ds\Vector(["a", 1, true]);

var_dump($vector->find("a")); // 0
var_dump($vector->find("b")); // false
var_dump($vector->find("1")); // false
var_dump($vector->find(1));   // 1
?>

   
```

The above example will output something similar to:

```text


int(0)
bool(false)
bool(false)
int(1)

   
```
