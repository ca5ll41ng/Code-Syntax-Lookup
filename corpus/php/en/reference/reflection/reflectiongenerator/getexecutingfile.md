---
id: "en-php-function-reflectiongenerator-getexecutingfile"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::getExecutingFile"
title: "Gets the file name of the currently executing generator"
signature: "public string ReflectionGenerator::getExecutingFile()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.getexecutingfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the file name of the currently executing generator

## Description

```php
public string ReflectionGenerator::getExecutingFile()
```

Get the full path and file name of the currently executing generator.

## Parameters

This function has no parameters.

## Return Values

Returns the full path and file name of the currently executing generator.

## Examples

**`ReflectionGenerator::getExecutingFile()` example**

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

echo "File: {$reflectionGen->getExecutingFile()}";

    
```

The above example will output something similar to:

```text


File: /path/to/file/example.php

    
```

## See Also

`ReflectionGenerator::getExecutingLine()` `ReflectionGenerator::getExecutingGenerator()`
