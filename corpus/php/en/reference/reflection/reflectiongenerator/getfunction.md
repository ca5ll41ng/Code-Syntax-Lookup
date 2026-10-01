---
id: "en-php-function-reflectiongenerator-getfunction"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::getFunction"
title: "Gets the function name of the generator"
signature: "public ReflectionFunctionAbstract ReflectionGenerator::getFunction()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.getfunction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the function name of the generator

## Description

```php
public ReflectionFunctionAbstract ReflectionGenerator::getFunction()
```

Enables the function name of the generator to be obtained by returning a class derived from `ReflectionFunctionAbstract`.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionFunctionAbstract` class. This will be `ReflectionFunction` for functions, or `ReflectionMethod` for methods.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `ReflectionGenerator::getFunction()` may now be called after the generator finished executing. |

## Examples

**`ReflectionGenerator::getFunction()` example**

```php


<?php

function gen()
{
    yield 1;
}

$gen = gen();

$reflectionGen = new ReflectionGenerator($gen);

var_dump($reflectionGen->getFunction());

    
```

The above example will output something similar to:

```text


object(ReflectionFunction)#3 (1) {
  ["name"]=>
  string(3) "gen"
}

    
```

## See Also

`ReflectionGenerator::getThis()` `ReflectionGenerator::getTrace()`
