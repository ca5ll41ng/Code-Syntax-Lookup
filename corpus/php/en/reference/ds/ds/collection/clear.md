---
id: "en-php-function-ds-collection-clear"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Collection::clear"
title: "Removes all values"
signature: "public void Ds\\Collection::clear()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-collection.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes all values

## Description

```php
public void Ds\Collection::clear()
```

Removes all values from the collection.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`Ds\Collection::clear()` example**

```php


<?php
$collection = new \Ds\Vector([1, 2, 3]);
print_r($collection);

$collection->clear();
print_r($collection);
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
)

   
```
