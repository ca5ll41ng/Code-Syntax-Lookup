---
id: "en-php-function-reflectiongenerator-getexecutingline"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::getExecutingLine"
title: "Gets the currently executing line of the generator"
signature: "public int ReflectionGenerator::getExecutingLine()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.getexecutingline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the currently executing line of the generator

## Description

```php
public int ReflectionGenerator::getExecutingLine()
```

Get the currently executing line number of the generator.

## Parameters

This function has no parameters.

## Return Values

Returns the line number of the currently executing statement in the generator.

## Examples

**`ReflectionGenerator::getExecutingLine()` example**

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

echo "Line: {$reflectionGen->getExecutingLine()}";

    
```

The above example will output something similar to:

```text


Line: 7

    
```

## See Also

`ReflectionGenerator::getExecutingGenerator()` `ReflectionGenerator::getExecutingFile()`
