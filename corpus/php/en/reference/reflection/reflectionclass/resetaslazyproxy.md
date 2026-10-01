---
id: "en-php-function-reflectionclass-resetaslazyproxy"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::resetAsLazyProxy"
title: "Resets an object and marks it as lazy"
signature: "public void ReflectionClass::resetAsLazyProxy(object $object, callable $factory, int $options = 0)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.resetaslazyproxy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resets an object and marks it as lazy

## Description

```php
public void ReflectionClass::resetAsLazyProxy(object $object, callable $factory, int $options = 0)
```

The behavior of this method is the same as `ReflectionClass::resetAsLazyGhost()` except that it uses the proxy strategy.

The `$object` itself becomes the proxy. Similarly to `ReflectionClass::resetAsLazyGhost()`, the object is not replaced by an other one, and its identity does not change, even after initialization. The proxy and the real instance are distinct objects, with distinct identities.

## Parameters

- **`$object`** — A non-lazy object, or an initialized lazy object.
- **`$factory`** — An factory callback with the same signature and purpose as in `ReflectionClass::newLazyProxy()`.
- ****

## Return Values

No value is returned.



## See Also

 `ReflectionClass::newLazyProxy()` `ReflectionClass::resetAsLazyGhost()`
