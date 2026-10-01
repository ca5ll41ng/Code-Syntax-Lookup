---
id: "en-php-function-reflectionfunctionabstract-hastentativereturntype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::hasTentativeReturnType"
title: "Returns whether the function has a tentative return type"
signature: "public bool ReflectionFunctionAbstract::hasTentativeReturnType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.hastentativereturntype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the function has a tentative return type

## Description

```php
public bool ReflectionFunctionAbstract::hasTentativeReturnType()
```

Returns whether the function has a tentative return type.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the function has a tentative return type, otherwise `false`.

## Examples

**`ReflectionFunctionAbstract::hasTentativeReturnType()` example**

```php


<?php

$method = new ReflectionMethod(\ArrayAccess::class, 'offsetGet');
var_dump($method->hasTentativeReturnType());

    
```

The above example will output:

```text


bool(true)

    
```

## See Also

`ReflectionFunctionAbstract::getTentativeReturnType()` `ReflectionFunctionAbstract::hasReturnType()` Return Type Compatibility with Internal Classes
