---
id: "en-php-function-reflectionclass-newlazyghost"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::newLazyGhost"
title: "Creates a new lazy ghost instance"
signature: "public object ReflectionClass::newLazyGhost(callable $initializer, int $options = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.newlazyghost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new lazy ghost instance

## Description

```php
public object ReflectionClass::newLazyGhost(callable $initializer, int $options = 0)
```

Creates a new lazy ghost instance of the class, attaching the `$initializer` to it. The constructor is not called, and properties are not set to their default value. However, the object will be automatically initialized by invoking the `$initializer` the first time its state is observed or modified. See Initialization Triggers and Initialization Sequence.

## Parameters

- **`$initializer`** — The initializer is a callback with the following signature: — `void``{initializer}()` `object``$object` - **`$object`** — The `$object` being initialized. At this point, the object is no longer marked as lazy, and accessing it does not trigger initialization again. — The `$initializer` function must return `null` or no value.
- **`$options`** — `$options` can be a combination of the following flags: - **`ReflectionClass::SKIP_INITIALIZATION_ON_SERIALIZE`** — By default, serializing a lazy object triggers its initialization. Setting this flag prevents initialization, allowing lazy objects to be serialized without being initialized.

## Return Values

Returns a lazy ghost instance. If the object has no properties, or if all its properties are static or virtual, a normal (non-lazy) instance is returned. See also Lifecycle of Lazy Objects.

## Errors/Exceptions

An `Error` if the class is internal or extends an internal class except `stdClass`.

## Examples

**Basic usage**

```php


<?php

class Example {
    public function __construct(public int $prop) {
        echo __METHOD__, "\n";
    }
}

$reflector = new ReflectionClass(Example::class);
$object = $reflector->newLazyGhost(function (Example $object) {
     $object->__construct(1);
});

var_dump($object);
var_dump($object instanceof Example);

// Triggers initialization, and fetches the property after that
var_dump($object->prop);

?>

   
```

The above example will output:

```text


lazy ghost object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
bool(true)
Example::__construct
int(1)

   
```

## See Also

 Lazy objects `ReflectionClass::newLazyProxy()` `ReflectionClass::newInstanceWithoutConstructor()` `ReflectionClass::resetAsLazyGhost()` `ReflectionClass::markLazyObjectAsInitialized()` `ReflectionClass::initializeLazyObject()` `ReflectionClass::isUninitializedLazyObject()` `ReflectionProperty::setRawValueWithoutLazyInitialization()` `ReflectionProperty::skipLazyInitialization()` `ReflectionProperty::isLazy()`
