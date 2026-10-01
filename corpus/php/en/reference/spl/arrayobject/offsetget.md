---
id: "en-php-function-arrayobject-offsetget"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::offsetGet"
title: "Returns the value at the specified index"
signature: "public mixed ArrayObject::offsetGet(mixed $key)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value at the specified index

## Description

```php
public mixed ArrayObject::offsetGet(mixed $key)
```

## Parameters

- **`$key`** — The index with the value.

## Return Values

The value at the specified index or `null`.

## Errors/Exceptions

Produces an `E_NOTICE` error message when the specified index does not exist.

## Examples

**`ArrayObject::offsetGet()` example**

```php


<?php
$arrayobj = new ArrayObject(array('zero', 7, 'example'=>'e.g.'));
var_dump($arrayobj->offsetGet(1));
var_dump($arrayobj->offsetGet('example'));
var_dump($arrayobj->offsetExists('notfound'));
?>

    
```

The above example will output:

```text


int(7)
string(4) "e.g."
bool(false)

    
```
