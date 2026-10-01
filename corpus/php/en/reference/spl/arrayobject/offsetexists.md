---
id: "en-php-function-arrayobject-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::offsetExists"
title: "Returns whether the requested index exists"
signature: "public bool ArrayObject::offsetExists(mixed $key)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the requested index exists

## Description

```php
public bool ArrayObject::offsetExists(mixed $key)
```

## Parameters

- **`$key`** — The index being checked.

## Return Values

`true` if the requested index exists, otherwise `false`

## Examples

**`ArrayObject::offsetExists()` example**

```php


<?php
$arrayobj = new ArrayObject(array('zero', 'one', 'example'=>'e.g.'));
var_dump($arrayobj->offsetExists(1));
var_dump($arrayobj->offsetExists('example'));
var_dump($arrayobj->offsetExists('notfound'));
?>

    
```

The above example will output:

```text


bool(true)
bool(true)
bool(false)

    
```
