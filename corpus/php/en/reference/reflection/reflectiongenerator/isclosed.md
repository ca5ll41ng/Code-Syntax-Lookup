---
id: "en-php-function-reflectiongenerator-isclosed"
language: "php"
lang: "en"
category: "function"
name: "ReflectionGenerator::isClosed"
title: "Checks if execution finished"
signature: "public bool ReflectionGenerator::isClosed()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectiongenerator.isclosed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if execution finished

## Description

```php
public bool ReflectionGenerator::isClosed()
```

Returns whether the execution reached the end of the function, a return statement or if an exception was thrown.

## Parameters

This function has no parameters.

## Return Values

Returns whether the generator finished executing.

## Examples

**`ReflectionGenerator::isClosed()` example**

```php


<?php

function gen()
{
    yield 'a';
    yield 'a';
}

$gen = gen();
$reflectionGen = new ReflectionGenerator($gen);

foreach ($gen as $value) {
    echo $value, PHP_EOL;
    var_dump($reflectionGen->isClosed());
}

var_dump($reflectionGen->isClosed());

?>

   
```

The above example will output:

```text


a
bool(false)
a
bool(false)
bool(true)

   
```
