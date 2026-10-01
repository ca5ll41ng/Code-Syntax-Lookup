---
id: "en-php-function-reflectionproperty-skiplazyinitialization"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::skipLazyInitialization"
title: "Marks property as non-lazy"
signature: "public void ReflectionProperty::skipLazyInitialization(object $object)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.skiplazyinitialization.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Marks property as non-lazy

## Description

```php
public void ReflectionProperty::skipLazyInitialization(object $object)
```

Marks a property as non-lazy such that it can be accessed directly without triggering lazy initialization. The property is initialized to its default value, if any. The property must not be dynamic, static, or virtual, and the object must be an instance of a user defined class or `stdClass`.

If this was the last lazy property, the object is marked as non-lazy and the initializer or factory function is detached.

## Parameters

- **`$object`** — The object to mark the property on.

## Return Values

No value is returned.

## See Also

 Lazy objects `ReflectionProperty::setRawValueWithoutLazyInitialization()` `ReflectionClass::newLazyGhost()`
