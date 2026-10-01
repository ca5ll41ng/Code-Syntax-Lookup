---
id: "en-php-function-reflectiontype-allowsnull"
language: "php"
lang: "en"
category: "function"
name: "ReflectionType::allowsNull"
title: "Checks if null is allowed"
signature: "public bool ReflectionType::allowsNull()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiontype.allowsnull.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if null is allowed

## Description

```php
public bool ReflectionType::allowsNull()
```

Checks whether the parameter allows `null`.

## Parameters

This function has no parameters.

## Return Values

`true` if `null` is allowed, otherwise `false`

## Examples

**`ReflectionType::allowsNull()` example**

```php


<?php
function someFunction(string $param, stdClass $param2 = null) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();

var_dump($reflectionParams[0]->getType()->allowsNull());
var_dump($reflectionParams[1]->getType()->allowsNull());

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```

## See Also

`ReflectionNamedType::isBuiltin()` `ReflectionType::__toString()` `ReflectionParameter::getType()`
