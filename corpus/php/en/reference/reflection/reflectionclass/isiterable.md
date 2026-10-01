---
id: "en-php-function-reflectionclass-isiterable"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::isIterable"
title: "Check whether this class is iterable"
signature: "public bool ReflectionClass::isIterable()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.isiterable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether this class is iterable

## Description

```php
public bool ReflectionClass::isIterable()
```

Check whether this class is iterable (i.e. can be used inside ).

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the class is iterable or `false` otherwise.

## Examples

**Basic `ReflectionClass::isIterable()` Usage**

```php


<?php

class IteratorClass implements Iterator
{
    public function __construct() {}

    public function key(): mixed {}

    public function current(): mixed {}

    public function next(): void {}

    public function valid(): bool {}

    public function rewind(): void {}
}

class DerivedClass extends IteratorClass {}

class NonIterator {}

function dump_iterable($class)
{
    $reflection = new ReflectionClass($class);
    var_dump($reflection->isIterable());
}

$classes = ["ArrayObject", "IteratorClass", "DerivedClass", "NonIterator",];

foreach ($classes as $class) {
    echo "Is $class iterable? ";
    dump_iterable($class);
}
?>

    
```

The above example will output:

```text


Is ArrayObject iterable? bool(true)
Is IteratorClass iterable? bool(true)
Is DerivedClass iterable? bool(true)
Is NonIterator iterable? bool(false)

    
```

## See Also

`ReflectionClass::__construct()`
