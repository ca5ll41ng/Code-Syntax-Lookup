---
id: "en-php-function-reflectiongenerator-getexecutinggenerator"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::getExecutingGenerator"
title: "Gets the executing `Generator` object"
signature: "public Generator ReflectionGenerator::getExecutingGenerator()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.getexecutinggenerator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the executing `Generator` object

## Description

```php
public Generator ReflectionGenerator::getExecutingGenerator()
```

Get the executing `Generator` object

## Parameters

This function has no parameters.

## Return Values

Returns the currently executing `Generator` object.

## Examples

**`ReflectionGenerator::getExecutingGenerator()` example**

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

$gen2 = $reflectionGen->getExecutingGenerator();

var_dump($gen2 === $gen);
var_dump($gen2->current());

    
```

The above example will output something similar to:

```text


bool(true)
int(1);

    
```

## See Also

`ReflectionGenerator::getExecutingLine()` `ReflectionGenerator::getExecutingFile()`
