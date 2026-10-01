---
id: "en-php-function-arrayiterator-valid"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::valid"
title: "Check whether array contains more entries"
signature: "public bool ArrayIterator::valid()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether array contains more entries

## Description

```php
public bool ArrayIterator::valid()
```

Checks if the `array` contains any more entries.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the iterator is valid, otherwise `false`

## Examples

**`ArrayIterator::valid()` example**

```php


<?php
$array = array('1' => 'one');

$arrayobject = new ArrayObject($array);
$iterator = $arrayobject->getIterator();

var_dump($iterator->valid()); //bool(true)

$iterator->next(); // advance to the next item

//bool(false) because there is only one array element
var_dump($iterator->valid());
?>

    
```
