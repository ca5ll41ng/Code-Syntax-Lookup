---
id: "en-php-function-ds-vector-push"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Vector::push"
title: "Adds values to the end of the vector"
signature: "public void Ds\\Vector::push(mixed $values)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-vector.push.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds values to the end of the vector

## Description

```php
public void Ds\Vector::push(mixed $values)
```

Adds values to the end of the vector.

## Parameters

- **`$values`** — The values to add.

## Return Values

No value is returned.

## Examples

**`Ds\Vector::push()` example**

```php


<?php
$vector = new \Ds\Vector();

$vector->push("a");
$vector->push("b");
$vector->push("c", "d");
$vector->push(...["e", "f"]);

print_r($vector);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)

   
```
