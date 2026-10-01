---
id: "en-php-function-reflectionproperty-isprotected"
language: "php"
lang: "en"
category: "function"
name: "ReflectionProperty::isProtected"
title: "Checks if property is protected"
signature: "public bool ReflectionProperty::isProtected()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionproperty.isprotected.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if property is protected

## Description

```php
public bool ReflectionProperty::isProtected()
```

Checks whether the property is protected.

## Parameters

This function has no parameters.

## Return Values

`true` if the property is protected, `false` otherwise.

> Note this refers only to the main visibility, and not to a set-visibility, if specified.

## See Also

`ReflectionProperty::isPublic()` `ReflectionProperty::isPrivate()` `ReflectionProperty::isReadOnly()` `ReflectionProperty::isStatic()`
