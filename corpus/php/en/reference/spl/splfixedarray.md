---
id: "en-php-guide-class-splfixedarray"
language: "php"
lang: "en"
category: "guide"
name: "class.splfixedarray"
title: "The SplFixedArray class"
module: "spl"
source_url: "https://www.php.net/manual/en/class.splfixedarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SplFixedArray class

SplFixedArray

   Introduction  The SplFixedArray class provides the main functionalities of array. The main difference between a SplFixedArray and a normal PHP array is that the SplFixedArray must be resized manually and allows only integers within the range as indexes. The advantage is that it uses less memory than a standard `array`.      Class Synopsis    `SplFixedArray`   `implements` IteratorAggregate   ArrayAccess   Countable   JsonSerializable        Changelog 
|  |  |
| --- | --- |
| 8.4.0 | Out of bounds accesses in `SplFixedArray` now throw exceptions of type OutOfBoundsException instead of RuntimeException. Because OutOfBoundsException is a child class of RuntimeException no behavioural changes are exhibited when attempting to catch those exceptions. |
| 8.2.0 | The `SplFixedArray::__serialize()` and `SplFixedArray::__unserialize()` magic methods have been added to `SplFixedArray`. |
| 8.1.0 | Using a non-integer key on a `SplFixedArray` now throws a TypeError instead of a RuntimeException. |
| 8.1.0 | `SplFixedArray` implements JsonSerializable now. |
| 8.0.0 | `SplFixedArray` implements IteratorAggregate now. Previously, Iterator was implemented instead. |

    Examples  
**`SplFixedArray` usage example**

```php

<?php
// Initialize the array with a fixed length
$array = new SplFixedArray(5);

$array[1] = 2;
$array[4] = "foo";

var_dump($array[0]); // NULL
var_dump($array[1]); // int(2)

var_dump($array["4"]); // string(3) "foo"

// Increase the size of the array to 10
$array->setSize(10);

$array[9] = "asdf";

// Shrink the array to a size of 2
$array->setSize(2);

// The following two blocks throw a RuntimeException: Index invalid or out of range
try {
    var_dump($array[-1]);
} catch(RuntimeException $e) {
    echo "RuntimeException: ".$e->getMessage()."\n";
}

try {
    var_dump($array[5]);
} catch(RuntimeException $e) {
    echo "RuntimeException: ".$e->getMessage()."\n";
}

// As of PHP 8.1.0, using a non-integer key throws a TypeError.
// Prior to PHP 8.1.0, a RuntimeException was thrown instead.
try {
    var_dump($array["non-numeric"]);
} catch(TypeError $e) {
    echo "TypeError: ".$e->getMessage()."\n";
}
?>

    
```

The above example will output:

```text

NULL
int(2)
string(3) "foo"
RuntimeException: Index invalid or out of range
RuntimeException: Index invalid or out of range
TypeError: Illegal offset type

     
```

   
> Prior to PHP 8.1.0, accessing a `SplFixedArray` with a non-integer key threw a RuntimeException instead of a TypeError.
