---
id: "en-php-function-arrayobject-getiterator"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::getIterator"
title: "Create a new iterator from an ArrayObject instance"
signature: "public Iterator ArrayObject::getIterator()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.getiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new iterator from an ArrayObject instance

## Description

```php
public Iterator ArrayObject::getIterator()
```

Create a new Iterator (default is `ArrayIterator`) from an `ArrayObject` instance.

## Parameters

This function has no parameters.

## Return Values

An iterator from an `ArrayObject`.

## Examples

**`ArrayObject::getIterator()` example**

```php


<?php

$array = [
    '1' => 'one',
    '2' => 'two',
    '3' => 'three',
];

$arrayobject = new ArrayObject($array);

$iterator = $arrayobject->getIterator();

while ($iterator->valid()) {
    echo $iterator->key() . ' => ' . $iterator->current() . "\n";

    $iterator->next();
}

?>

    
```

The above example will output:

```text


1 => one
2 => two
3 => three

    
```
