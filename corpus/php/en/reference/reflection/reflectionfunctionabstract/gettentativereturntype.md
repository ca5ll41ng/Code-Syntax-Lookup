---
id: "en-php-function-reflectionfunctionabstract-gettentativereturntype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::getTentativeReturnType"
title: "Returns the tentative return type associated with the function"
signature: "public ReflectionType|null ReflectionFunctionAbstract::getTentativeReturnType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.gettentativereturntype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the tentative return type associated with the function

## Description

```php
public ReflectionType|null ReflectionFunctionAbstract::getTentativeReturnType()
```

Returns the tentative return type associated with the function.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionType` object if a tentative return type is specified, `null` otherwise.

## Examples

**`ReflectionFunctionAbstract::getTentativeReturnType()` example**

```php


<?php

$method = new ReflectionMethod(\ArrayAccess::class, 'offsetGet');
var_dump($method->getTentativeReturnType());

    
```

The above example will output something similar to:

```text


object(ReflectionNamedType)#2 (0) {
}

    
```

## See Also

`ReflectionFunctionAbstract::getReturnType()` `ReflectionFunctionAbstract::hasTentativeReturnType()` Return Type Compatibility with Internal Classes
