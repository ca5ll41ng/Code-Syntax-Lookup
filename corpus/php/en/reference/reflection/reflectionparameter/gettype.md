---
id: "en-php-function-reflectionparameter-gettype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::getType"
title: "Gets a parameter's type"
signature: "public ReflectionType|null ReflectionParameter::getType()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a parameter's type

## Description

```php
public ReflectionType|null ReflectionParameter::getType()
```

Gets the associated type of a parameter.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionType` object if a parameter type is specified, `null` otherwise.

## Examples

**`ReflectionParameter::getType()` Usage as of PHP 7.1.0**

As of PHP 7.1.0, `ReflectionType::__toString()` is deprecated, and `ReflectionParameter::getType()` *may* return an instance of `ReflectionNamedType`. To get the name of the parameter type, `ReflectionNamedType()` is available in this case.

```php


<?php
function someFunction(int $param, $param2) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();
$reflectionType1 = $reflectionParams[0]->getType();
$reflectionType2 = $reflectionParams[1]->getType();

assert($reflectionType1 instanceof ReflectionNamedType);
echo $reflectionType1->getName(), PHP_EOL;
var_dump($reflectionType2);
?>

    
```

The above example will output:

```text


int
NULL

    
```

**`ReflectionParameter::getType()` Usage before PHP 7.1.0**

```php


<?php
function someFunction(int $param, $param2) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();
$reflectionType1 = $reflectionParams[0]->getType();
$reflectionType2 = $reflectionParams[1]->getType();

echo $reflectionType1, PHP_EOL;
var_dump($reflectionType2);
?>

    
```

Output of the above example in PHP 7.0:

```text


int
NULL

    
```

**`ReflectionParameter::getType()` Usage in PHP 8.0.0 and later**

As of PHP 8.0.0, this method may return a `ReflectionNamedType` instance or a `ReflectionUnionType` instance. The latter is a collection of the former. To analyze a type, it is often convenient to normalize it to an array of `ReflectionNamedType` objects. The following function will return an array of `0` or more `ReflectionNamedType` instances.

```php


<?php
function getAllTypes(ReflectionParameter $reflectionParameter): array
{
    $reflectionType = $reflectionParameter->getType();

    if (!$reflectionType) return [];

    return $reflectionType instanceof ReflectionUnionType
        ? $reflectionType->getTypes()
        : [$reflectionType];
}
?>

   
```

## See Also

`ReflectionParameter::hasType()` `ReflectionType::__toString()`
