---
id: "en-php-function-reflectionproperty-setrawvaluewithoutlazyinitialization"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::setRawValueWithoutLazyInitialization"
title: "Set raw property value without triggering lazy initialization"
signature: "public void ReflectionProperty::setRawValueWithoutLazyInitialization(object $object, mixed $value)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.setrawvaluewithoutlazyinitialization.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set raw property value without triggering lazy initialization

## Description

```php
public void ReflectionProperty::setRawValueWithoutLazyInitialization(object $object, mixed $value)
```

Sets (changes) the property's value without triggering lazy initialization and without calling hook functions. The property is marked as non-lazy and can be accessed afterwards without triggering lazy initialization. The property must not be dynamic, static, or virtual, and the object must be an instance of a user defined class or `stdClass`.

If this was the last lazy property, the object is marked as non-lazy and the initializer or factory function is detached.

## Parameters

- **`$object`** — The object to change the property on.
- **`$value`** — The new value.

## Return Values

No value is returned.

## See Also

 Lazy objects `ReflectionProperty::skipLazyInitialization()` `ReflectionClass::newLazyGhost()`
