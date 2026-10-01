---
id: "en-php-function-reflectiongenerator-construct"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::__construct"
title: "Constructs a ReflectionGenerator object"
signature: "public ReflectionGenerator::__construct(Generator $generator)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a ReflectionGenerator object

## Description

```php
public ReflectionGenerator::__construct(Generator $generator)
```

Constructs a `ReflectionGenerator` object.

## Parameters

- **`$generator`** — A generator object.

## Examples

**`ReflectionGenerator::__construct()` example**

```php


<?php

function gen()
{
    yield 1;
}

$gen = gen();

$reflectionGen = new ReflectionGenerator($gen);

echo <<< output
{$reflectionGen->getFunction()->name}
Line: {$reflectionGen->getExecutingLine()}
File: {$reflectionGen->getExecutingFile()}
output;

    
```

The above example will output something similar to:

```text


gen
Line: 5
File: /path/to/file/example.php

    
```

## See Also

`ReflectionGenerator::getFunction()` `ReflectionGenerator::getExecutingLine()` `ReflectionGenerator::getExecutingFile()`
