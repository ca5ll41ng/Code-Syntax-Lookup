---
id: "en-php-function-reflectionfunctionabstract-getreturntype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::getReturnType"
title: "Gets the specified return type of a function"
signature: "public ReflectionType|null ReflectionFunctionAbstract::getReturnType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.getreturntype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the specified return type of a function

## Description

```php
public ReflectionType|null ReflectionFunctionAbstract::getReturnType()
```

Gets the specified return type of a reflected function.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionType` object if a return type is specified, `null` otherwise.

## Examples

**`ReflectionFunctionAbstract::getReturnType()` example**

```php


<?php

function to_int($param) : int {
    return (int) $param;
}

$reflection1 = new ReflectionFunction('to_int');
echo $reflection1->getReturnType();

    
```

The above example will output:

```text


int

    
```

**Usage on built-in functions**

```php


<?php

$reflection2 = new ReflectionFunction('array_merge');

var_dump($reflection2->getReturnType());

    
```

The above example will output:

```text


null

    
```

This is because many internal functions do not have types specified for their parameters or return values. It is therefore best to avoid using this method on built-in functions.

## See Also

`ReflectionFunctionAbstract::hasReturnType()` `ReflectionType::__toString()`
