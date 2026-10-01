---
id: "en-php-function-ds-vector-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::isEmpty"
title: "Returns whether the vector is empty"
signature: "public bool Ds\\Vector::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the vector is empty

## Description

```php
public bool Ds\Vector::isEmpty()
```

Returns whether the vector is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the vector is empty, `false` otherwise.

## Examples

**`Ds\Vector::isEmpty()` example**

```php


<?php
$a = new \Ds\Vector([1, 2, 3]);
$b = new \Ds\Vector();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>

   
```

The above example will output something similar to:

```text


bool(false)
bool(true)

   
```
