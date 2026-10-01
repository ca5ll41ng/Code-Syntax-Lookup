---
id: "en-php-function-arrayobject-setiteratorclass"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::setIteratorClass"
title: "Sets the iterator classname for the ArrayObject"
signature: "public void ArrayObject::setIteratorClass(string $iteratorClass)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.setiteratorclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the iterator classname for the ArrayObject

## Description

```php
public void ArrayObject::setIteratorClass(string $iteratorClass)
```

Sets the classname of the array iterator that is used by ArrayObject::getIterator().

## Parameters

- **`$iteratorClass`** — The classname of the array iterator to use when iterating over this object.

## Return Values

No value is returned.

## Examples

**`ArrayObject::setIteratorClass()` example**

```php


<?php
// Custom ArrayIterator (inherits from ArrayIterator)
class MyArrayIterator extends ArrayIterator {
    // custom implementation
}

// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Set the iterator classname to the newly
$fruitsArrayObject->setIteratorClass('MyArrayIterator');
var_dump($fruitsArrayObject->getIterator());

?>

    
```

The above example will output:

```text


object(MyArrayIterator)#2 (1) {
  ["storage":"ArrayIterator":private]=>
  object(ArrayObject)#1 (1) {
    ["storage":"ArrayObject":private]=>
    array(4) {
      ["lemons"]=>
      int(1)
      ["oranges"]=>
      int(4)
      ["bananas"]=>
      int(5)
      ["apples"]=>
      int(10)
    }
  }
}

    
```
