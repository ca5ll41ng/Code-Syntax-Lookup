---
id: "en-php-function-arrayiterator-current"
language: "php"
lang: "en"
category: "function"
name: "ArrayIterator::current"
title: "Return current array entry"
signature: "public mixed ArrayIterator::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayiterator.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return current array entry

## Description

```php
public mixed ArrayIterator::current()
```

Get the current `array` entry.

## Parameters

This function has no parameters.

## Return Values

The current `array` entry.

## Examples

**`ArrayIterator::current()` example**

```php


<?php
$array = array('1' => 'one',
               '2' => 'two',
               '3' => 'three');

$arrayobject = new ArrayObject($array);

for($iterator = $arrayobject->getIterator();
    $iterator->valid();
    $iterator->next()) {

    echo $iterator->key() . ' => ' . $iterator->current() . "\n";
}
?>

    
```

The above example will output:

```text


1 => one
2 => two
3 => three

    
```
