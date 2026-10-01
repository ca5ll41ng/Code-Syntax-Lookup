---
id: "en-php-function-reflectionproperty-construct"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::__construct"
title: "Construct a ReflectionProperty object"
signature: "public ReflectionProperty::__construct(object|string $class, string $property)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a ReflectionProperty object

## Description

```php
public ReflectionProperty::__construct(object|string $class, string $property)
```

## Parameters

- **`$class`** — Either a string containing the name of the class to reflect, or an object.
- **`$property`** — The name of the property being reflected.

## Errors/Exceptions

Trying to get or set private or protected class property's values will result in an exception being thrown.

## Examples

**`ReflectionProperty::__construct()` example**

```php


<?php

class Str
{
    public $length  = 5;
}

// Create an instance of the ReflectionProperty class
$prop = new ReflectionProperty('Str', 'length');

// Print out basic information
printf(
    "===> The%s%s%s%s property '%s' (which was %s)\n" .
    "     having the modifiers %s\n",
        $prop->isPublic() ? ' public' : '',
        $prop->isPrivate() ? ' private' : '',
        $prop->isProtected() ? ' protected' : '',
        $prop->isStatic() ? ' static' : '',
        $prop->getName(),
        $prop->isDefault() ? 'declared at compile-time' : 'created at run-time',
        var_export(Reflection::getModifierNames($prop->getModifiers()), true)
);

// Create an instance of Str
$obj= new Str();

// Get current value
printf("---> Value is: ");
var_dump($prop->getValue($obj));

// Change value
$prop->setValue($obj, 10);
printf("---> Setting value to 10, new value is: ");
var_dump($prop->getValue($obj));

// Dump object
var_dump($obj);

?>

    
```

The above example will output something similar to:

```text


===> The public property 'length' (which was declared at compile-time)
     having the modifiers array (
  0 => 'public',
)
---> Value is: int(5)
---> Setting value to 10, new value is: int(10)
object(Str)#2 (1) {
  ["length"]=>
  int(10)
}

    
```

**Getting value from private and protected properties using `ReflectionProperty` class**

```php


<?php

class Foo
{
    public $x = 1;
    protected $y = 2;
    private $z = 3;
}

$obj = new Foo;

$prop = new ReflectionProperty('Foo', 'y');
$prop->setAccessible(true);
var_dump($prop->getValue($obj)); // int(2)

$prop = new ReflectionProperty('Foo', 'z');
$prop->setAccessible(true);
var_dump($prop->getValue($obj)); // int(2)

?>

    
```

The above example will output something similar to:

```text


int(2)
int(3)

    
```

## See Also

`ReflectionProperty::getName()` Constructors
