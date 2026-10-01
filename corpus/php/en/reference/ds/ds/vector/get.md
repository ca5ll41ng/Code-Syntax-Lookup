---
id: "en-php-function-ds-vector-get"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::get"
title: "Returns the value at a given index"
signature: "public mixed Ds\\Vector::get(int $index)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at a given index

## Description

```php
public mixed Ds\Vector::get(int $index)
```

Returns the value at a given index.

## Parameters

- **`$index`** — The index to access, starting at 0.

## Return Values

The value at the requested index.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Vector::get()` example**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

var_dump($vector->get(0));
var_dump($vector->get(1));
var_dump($vector->get(2));
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```

**`Ds\Vector::get()` example using array syntax**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

var_dump($vector[0]);
var_dump($vector[1]);
var_dump($vector[2]);
?>

   
```

The above example will output something similar to:

```text


string(1) "a"
string(1) "b"
string(1) "c"

   
```
