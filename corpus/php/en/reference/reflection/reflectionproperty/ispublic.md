---
id: "en-php-function-reflectionproperty-ispublic"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isPublic"
title: "Checks if property is public"
signature: "public bool ReflectionProperty::isPublic()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.ispublic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property is public

## Description

```php
public bool ReflectionProperty::isPublic()
```

Checks whether the property is public.

## Parameters

This function has no parameters.

## Return Values

`true` if the property is marked public, `false` otherwise.

> Note this refers only to the main visibility, and not to a set-visibility, if specified.

## Notes

> Be aware that a property being `public` does not always imply is it publicly writeable. A property could be virtual with no `set` hook, or it could be `readonly` and already have been written to, or it could have a `set` visibility defined that is non-public. In all of those cases, this method will return `true` but the property will not be writeable.

## See Also

`ReflectionProperty::isProtected()` `ReflectionProperty::isProtectedSet()` `ReflectionProperty::isPrivate()` `ReflectionProperty::isPrivateSet()` `ReflectionProperty::isReadOnly()` `ReflectionProperty::isStatic()`
