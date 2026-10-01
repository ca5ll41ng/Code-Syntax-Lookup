---
id: "en-php-function-reflectiongenerator-getthis"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::getThis"
title: "Gets the `$this` value of the generator"
signature: "public object|null ReflectionGenerator::getThis()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.getthis.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the `$this` value of the generator

## Description

```php
public object|null ReflectionGenerator::getThis()
```

Get the `$this` value that the generator has access to.

## Parameters

This function has no parameters.

## Return Values

Returns the `$this` value, or `null` if the generator was not created in a class context.

## Examples

**`ReflectionGenerator::getThis()` example**

```php


<?php

class GenExample
{
    public function gen()
    {
        yield 1;
    }
}

$gen = (new GenExample)->gen();

$reflectionGen = new ReflectionGenerator($gen);

var_dump($reflectionGen->getThis());

    
```

The above example will output something similar to:

```text


object(GenExample)#3 (0) {
}

    
```

## See Also

`ReflectionGenerator::getFunction()` `ReflectionGenerator::getTrace()`
