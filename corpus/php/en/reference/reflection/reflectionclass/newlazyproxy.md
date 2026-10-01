---
id: "en-php-function-reflectionclass-newlazyproxy"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::newLazyProxy"
title: "Creates a new lazy proxy instance"
signature: "public object ReflectionClass::newLazyProxy(callable $factory, int $options = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.newlazyproxy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new lazy proxy instance

## Description

```php
public object ReflectionClass::newLazyProxy(callable $factory, int $options = 0)
```

Creates a new lazy proxy instance of the class, attaching the `$factory` function to it. The constructor is not called, and properties are not set to their default values. When an attempt is made to observe or modify the proxy's state for the first time, the factory function is called to provide a real instance, which is then attached to the proxy. After this, all subsequent interactions with the proxy are forwarded to the real instance. See Initialization Triggers and Initialization Sequence.

## Parameters

- **`$factory`** — The factory is a callback with the following signature: — `object``{factory}()` `object``$object` - **`$object`** — The `$object` being initialized. At this point, the object is no longer marked as lazy, and accessing it does not trigger initialization again. — The factory function must return an object, referred to as the *real instance*, which is then attached to the proxy. This real instance must not be lazy and must not be the proxy itself. If the real instance does not have the same class as the proxy, the proxy's class must be a subclass of the real instance's class, without additional properties, and must not override the `__destruct()` or `__clone()` methods.
- ****

## Return Values

Returns a lazy proxy instance. If the object has no properties, or if all its properties are static or virtual, a normal (non-lazy) instance is returned. See also Lifecycle of Lazy Objects.



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
$object = $reflector->newLazyProxy(function (Example $object) {
     $realInstance = new Example(1);
     return $realInstance;
});

var_dump($object);
var_dump($object instanceof Example);

// Triggers initialization, and forwards the property fetch to the real instance
var_dump($object->prop);

var_dump($object);
?>

   
```

The above example will output:

```text


lazy proxy object(Example)#3 (0) {
  ["prop"]=>
  uninitialized(int)
}
bool(true)
Example::__construct
int(1)
lazy proxy object(Example)#3 (1) {
  ["instance"]=>
  object(Example)#4 (1) {
    ["prop"]=>
    int(1)
  }
}

   
```

## See Also

 Lazy objects `ReflectionClass::newLazyGhost()` `ReflectionClass::newInstanceWithoutConstructor()` `ReflectionClass::resetAsLazyProxy()` `ReflectionClass::markLazyObjectAsInitialized()` `ReflectionClass::initializeLazyObject()` `ReflectionClass::isUninitializedLazyObject()` `ReflectionProperty::setRawValueWithoutLazyInitialization()` `ReflectionProperty::skipLazyInitialization()` `ReflectionProperty::isLazy()`
