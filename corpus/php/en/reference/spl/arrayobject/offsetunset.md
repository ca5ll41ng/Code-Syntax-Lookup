---
id: "en-php-function-arrayobject-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::offsetUnset"
title: "Unsets the value at the specified index"
signature: "public void ArrayObject::offsetUnset(mixed $key)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unsets the value at the specified index

## Description

```php
public void ArrayObject::offsetUnset(mixed $key)
```

Unsets the value at the specified index.

## Parameters

- **`$key`** — The index being unset.

## Return Values

No value is returned.

## Examples

**`ArrayObject::offsetUnset()` example**

```php


<?php
$arrayobj = new ArrayObject(array(0=>'zero',2=>'two'));
$arrayobj->offsetUnset(2);
var_dump($arrayobj);
?>

    
```

The above example will output:

```text


object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(1) {
    [0]=>
    string(4) "zero"
  }
}

    
```
