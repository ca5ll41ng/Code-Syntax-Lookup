---
id: "en-php-function-reflectionfunctionabstract-hasreturntype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::hasReturnType"
title: "Checks if the function has a specified return type"
signature: "public bool ReflectionFunctionAbstract::hasReturnType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.hasreturntype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the function has a specified return type

## Description

```php
public bool ReflectionFunctionAbstract::hasReturnType()
```

Checks whether the reflected function has a return type specified.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the function is a specified return type, otherwise `false`.

## Examples

**`ReflectionFunctionAbstract::hasReturnType()` example**

```php


<?php

function to_int($param): int
{
    return (int) $param;
}

$reflection1 = new ReflectionFunction('to_int');
var_dump($reflection1->hasReturnType());

    
```

The above example will output:

```text


bool(true)

    
```

**Usage on built-in functions**

```php


<?php

$reflection2 = new ReflectionFunction('array_merge');

var_dump($reflection2->hasReturnType());

    
```

The above example will output:

```text


bool(false)

    
```

## See Also

`ReflectionFunctionAbstract::getReturnType()`
