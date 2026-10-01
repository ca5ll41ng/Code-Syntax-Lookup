---
id: "en-php-function-reflectionparameter-hastype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::hasType"
title: "Checks if parameter has a type"
signature: "public bool ReflectionParameter::hasType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.hastype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if parameter has a type

## Description

```php
public bool ReflectionParameter::hasType()
```

Checks if the parameter has a type associated with it.

## Parameters

This function has no parameters.

## Return Values

`true` if a type is specified, `false` otherwise.

## Examples

**`ReflectionParameter::hasType()` example**

```php


<?php
function someFunction(string $param, $param2 = null) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();

var_dump($reflectionParams[0]->hasType());
var_dump($reflectionParams[1]->hasType());

    
```

The above example will output something similar to:

```text


bool(true)
bool(false)

    
```

## See Also

`ReflectionParameter::getType()`
