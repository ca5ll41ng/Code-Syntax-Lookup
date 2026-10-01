---
id: "en-php-function-ds-vector-set"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::set"
title: "Updates a value at a given index"
signature: "public void Ds\\Vector::set(int $index, mixed $value)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Updates a value at a given index

## Description

```php
public void Ds\Vector::set(int $index, mixed $value)
```

Updates a value at a given index.

## Parameters

- **`$index`** — The index of the value to update.
- **`$value`** — The new value.

## Return Values

No value is returned.

## Errors/Exceptions

`OutOfRangeException` if the index is not valid.

## Examples

**`Ds\Vector::set()` example**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

$vector->set(1, "_");
print_r($vector);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => _
    [2] => c
)

   
```

**`Ds\Vector::set()` example using array syntax**

```php


<?php
$vector = new \Ds\Vector(["a", "b", "c"]);

$vector[1] = "_";
print_r($vector);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => _
    [2] => c
)

   
```
