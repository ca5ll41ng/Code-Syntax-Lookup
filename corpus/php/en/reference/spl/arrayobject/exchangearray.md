---
id: "en-php-function-arrayobject-exchangearray"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::exchangeArray"
title: "Exchange the array for another one"
signature: "public array ArrayObject::exchangeArray(array|object $array)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.exchangearray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Exchange the array for another one

## Description

```php
public array ArrayObject::exchangeArray(array|object $array)
```

Exchange the current `array` with another `array` or `object`.

## Parameters

- **`$array`** — The new `array` or `object` to exchange with the current array.

## Return Values

Returns the old `array`.

## Examples

**`ArrayObject::exchangeArray()` example**

```php


<?php
// Array of available fruits
$fruits = array("lemons" => 1, "oranges" => 4, "bananas" => 5, "apples" => 10);
// Array of locations in Europe
$locations = array('Amsterdam', 'Paris', 'London');

$fruitsArrayObject = new ArrayObject($fruits);

// Now exchange fruits for locations
$old = $fruitsArrayObject->exchangeArray($locations);
var_dump($old);
var_dump($fruitsArrayObject);

?>

    
```

The above example will output:

```text


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
object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(3) {
    [0]=>
    string(9) "Amsterdam"
    [1]=>
    string(5) "Paris"
    [2]=>
    string(6) "London"
  }
}

    
```
