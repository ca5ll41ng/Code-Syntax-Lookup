---
id: "en-php-function-ds-collection-copy"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Collection::copy"
title: "Returns a shallow copy of the collection"
signature: "public Ds\\Collection Ds\\Collection::copy()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-collection.copy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a shallow copy of the collection

## Description

```php
public Ds\Collection Ds\Collection::copy()
```

Returns a shallow copy of the collection.

## Parameters

This function has no parameters.

## Return Values

Returns a shallow copy of the collection.

## Examples

**`Ds\Collection::copy()` example**

```php


<?php
$a = new \Ds\Vector([1, 2, 3]);
$b = $a->copy();

$b->push(4);

print_r($a);
print_r($b);
?>

   
```

The above example will output something similar to:

```text


Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
)
Ds\Vector Object
(
    [0] => 1
    [1] => 2
    [2] => 3
    [3] => 4
)

   
```
