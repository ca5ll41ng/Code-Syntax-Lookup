---
id: "en-php-function-reflectionclass-resetaslazyghost"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::resetAsLazyGhost"
title: "Resets an object and marks it as lazy"
signature: "public void ReflectionClass::resetAsLazyGhost(object $object, callable $initializer, int $options = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.resetaslazyghost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resets an object and marks it as lazy

## Description

```php
public void ReflectionClass::resetAsLazyGhost(object $object, callable $initializer, int $options = 0)
```

Resets an existing `$object` and marks it as lazy.

The object's destructor is called (if one exists) unless the `ReflectionClass::SKIP_DESTRUCTOR` flag is specified. In the special case where the object is an initialized proxy, the real instance is detached from the proxy. If the real instance is no longer referenced elsewhere, its destructor is called regardless of the `SKIP_DESTRUCTOR` flag.

Dynamic properties are removed, and the value of properties declared on the class is discarded as though `unset()` was called, and marked as lazy. This implies that if the object is an instance of a subclass with additional properties, these properties are not modified and not made lazy. Readonly properties are also not modified and not made lazy if they are `final` or the class itself is `final`.

If no properties were marked lazy, the object is not marked as lazy. See also Lazy Objects Lifecycle.

Otherwise, after calling this method, the behavior of the object is the same as an object created by `ReflectionClass::newLazyGhost()` (except for subclass and readonly properties, as described above).

The object is not replaced by another one, and its identity remains unchanged. Functionality such as `spl_object_id()`, `spl_object_hash()`, `SplObjectStorage`, `WeakMap`, `WeakReference`, or the identity operator (`===`) are unaffected.

## Parameters

- **`$object`** — A non-lazy object, or an initialized lazy object.
- **`$initializer`** — An initializer callback with the same signature and purpose as in `ReflectionClass::newLazyGhost()`.
- **`$options`** — `$options` can be a combination of the following flags: - **`ReflectionClass::SKIP_INITIALIZATION_ON_SERIALIZE`** — By default, serializing a lazy object triggers its initialization. Setting this flag prevents initialization, allowing lazy objects to be serialized without being initialized. - **`ReflectionClass::SKIP_DESTRUCTOR`** — By default, the object destructor is called (if any) before making it lazy. This provides safety regarding any preexisting state in the object. This flag disables that behavior, allowing objects to be reset as lazy without calling the destructor.

## Return Values

No value is returned.

## Errors/Exceptions

A `ReflectionException` if the object is lazy and non-initialized.

An `Error` if the object is being initialized, or if the object properties are being iterated with `foreach`.

## See Also

 `ReflectionClass::newLazyGhost()` `ReflectionClass::resetAsLazyProxy()`
