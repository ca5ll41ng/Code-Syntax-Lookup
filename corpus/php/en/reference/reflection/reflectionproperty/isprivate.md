---
id: "en-php-function-reflectionproperty-isprivate"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isPrivate"
title: "Checks if property is private"
signature: "public bool ReflectionProperty::isPrivate()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isprivate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property is private

## Description

```php
public bool ReflectionProperty::isPrivate()
```

Checks whether the property is private.

## Parameters

This function has no parameters.

## Return Values

`true` if the property is private, `false` otherwise.

> Note this refers only to the main visibility, and not to a set-visibility, if specified.

## See Also

`ReflectionProperty::isPublic()` `ReflectionProperty::isProtected()` `ReflectionProperty::isReadOnly()` `ReflectionProperty::isStatic()`
