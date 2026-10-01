---
id: "en-php-function-arrayobject-getarraycopy"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::getArrayCopy"
title: "Creates a copy of the ArrayObject"
signature: "public array ArrayObject::getArrayCopy()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.getarraycopy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a copy of the ArrayObject

## Description

```php
public array ArrayObject::getArrayCopy()
```

Exports the `ArrayObject` to an array.

## Parameters

This function has no parameters.

## Return Values

Returns a copy of the array. When the `ArrayObject` refers to an object, an array of the properties of that object will be returned.

## Examples

**`ArrayObject::getArrayCopy()` example**

```php


<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);
$fruitsArrayObject['pears'] = 4;

// create a copy of the array
$copy = $fruitsArrayObject->getArrayCopy();
var_dump($copy);

?>

    
```

The above example will output:

```text


array(5) {
  ["lemons"]=>
  int(1)
  ["oranges"]=>
  int(4)
  ["bananas"]=>
  int(5)
  ["apples"]=>
  int(10)
  ["pears"]=>
  int(4)
}

    
```
