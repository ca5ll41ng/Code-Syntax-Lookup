---
id: "en-php-function-reflectionclass-getlazyinitializer"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::getLazyInitializer"
title: "Gets lazy initializer"
signature: "public callable|null ReflectionClass::getLazyInitializer(object $object)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.getlazyinitializer.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets lazy initializer

## Description

```php
public callable|null ReflectionClass::getLazyInitializer(object $object)
```

Gets the lazy initializer or factory attached to `$object`.

## Parameters

- **`$object`** — The object from which to get the initializer.

## Return Values

Returns the initializer if the object is an uninitialized lazy object, `null` otherwise.

## See Also

 Lazy objects `ReflectionClass::newLazyGhost()`
