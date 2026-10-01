---
id: "en-php-function-arrayobject-getiteratorclass"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::getIteratorClass"
title: "Gets the iterator classname for the ArrayObject"
signature: "public string ArrayObject::getIteratorClass()"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.getiteratorclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the iterator classname for the ArrayObject

## Description

```php
public string ArrayObject::getIteratorClass()
```

Gets the class name of the array iterator that is used by ArrayObject::getIterator().

## Parameters

This function has no parameters.

## Return Values

Returns the iterator class name that is used to iterate over this object.

## Examples

**`ArrayObject::getIteratorClass()` example**

```php


<?php
// Custom ArrayIterator (inherits from ArrayIterator)
class MyArrayIterator extends ArrayIterator {
    // custom implementation
}

// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);

$fruitsArrayObject = new ArrayObject($fruits);

// Get the current class name
$className = $fruitsArrayObject->getIteratorClass();
var_dump($className);

// Set new classname
$fruitsArrayObject->setIteratorClass('MyArrayIterator');

// Get the new iterator classname
$className = $fruitsArrayObject->getIteratorClass();
var_dump($className);
?>

    
```

The above example will output:

```text


string(13) "ArrayIterator"
string(15) "MyArrayIterator"

    
```

## See Also

The ArrayObject::setIteratorClass method
