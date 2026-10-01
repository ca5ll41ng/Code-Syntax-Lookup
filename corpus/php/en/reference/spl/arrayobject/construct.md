---
id: "en-php-function-arrayobject-construct"
language: "php"
lang: "en"
category: "function"
name: "ArrayObject::__construct"
title: "Construct a new array object"
signature: "public ArrayObject::__construct(array|object $array = [], int $flags = 0, string $iteratorClass = ArrayIterator::class)"
module: "spl"
source_url: "https://www.php.net/manual/en/arrayobject.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new array object

## Description

```php
public ArrayObject::__construct(array|object $array = [], int $flags = 0, string $iteratorClass = ArrayIterator::class)
```

This constructs a new array `object`.

> As of PHP 8.5.0, passing an enum as the `$array` parameter throws an InvalidArgumentException. Modifying the `$name` or `$value` properties of an enum would break engine assumptions.

## Parameters

- **`$array`** — The `$array` parameter accepts an `array` or an `object`. Passing an `object` is deprecated as of PHP 8.5.0.
- **`$flags`** — Flags to control the behaviour of the `ArrayObject` object. See `ArrayObject::setFlags()`.
- **`$iteratorClass`** — Specify the class that will be used for iteration of the `ArrayObject` object. The class must be a subtype of the `ArrayIterator` class.

## Errors/Exceptions

As of PHP 8.5.0, throws an InvalidArgumentException if `$array` is an enum.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | Passing an enum as `$array` now throws an InvalidArgumentException. |
| 8.5.0 | Passing an `object` as `$array` is deprecated. |

## Examples

**`ArrayObject::__construct()` example**

```php


<?php

$array = [
    '1' => 'one',
    '2' => 'two',
    '3' => 'three'
];

$arrayobject = new ArrayObject($array);

var_dump($arrayobject);

?>

    
```

The above example will output:

```text


object(ArrayObject)#1 (1) {
  ["storage":"ArrayObject":private]=>
  array(3) {
    [1]=>
    string(3) "one"
    [2]=>
    string(3) "two"
    [3]=>
    string(5) "three"
  }
}

    
```

## See Also

 `ArrayObject::setFlags()` `ArrayObject::getArrayCopy()` `ArrayIterator::__construct()`
