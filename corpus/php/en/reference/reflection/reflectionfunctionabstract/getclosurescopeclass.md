---
id: "en-php-function-reflectionfunctionabstract-getclosurescopeclass"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::getClosureScopeClass"
title: "Returns the class corresponding to the scope inside a closure"
signature: "public ReflectionClass|null ReflectionFunctionAbstract::getClosureScopeClass()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.getclosurescopeclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the class corresponding to the scope inside a closure

## Description

```php
public ReflectionClass|null ReflectionFunctionAbstract::getClosureScopeClass()
```

Returns the class as a `ReflectionClass` that corresponds to the scope inside the `Closure`.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionClass` corresponding to the class whose scope is being used inside the `Closure`. If the function is not a closure or if it has global scope `null` is returned instead.



## See Also

 `ReflectionFunctionAbstract::getClosureCalledClass()` `ReflectionFunctionAbstract::getClosureThis()` `language.oop5.late-static-bindings`
