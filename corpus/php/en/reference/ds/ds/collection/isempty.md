---
id: "en-php-function-ds-collection-isempty"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Collection::isEmpty"
title: "Returns whether the collection is empty"
signature: "public bool Ds\\Collection::isEmpty()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-collection.isempty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the collection is empty

## Description

```php
public bool Ds\Collection::isEmpty()
```

Returns whether the collection is empty.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the collection is empty, `false` otherwise.

## Examples

**`Ds\Collection::isEmpty()` example**

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
