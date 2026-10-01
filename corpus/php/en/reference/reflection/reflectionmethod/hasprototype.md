---
id: "en-php-function-reflectionmethod-hasprototype"
language: "php"
lang: "en"
category: "function"
name: "ReflectionMethod::hasPrototype"
title: "Returns whether a method has a prototype"
signature: "public bool ReflectionMethod::hasPrototype()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionmethod.hasprototype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a method has a prototype

## Description

```php
public bool ReflectionMethod::hasPrototype()
```

Returns whether a method has a prototype.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the method has a prototype, otherwise `false`.

## Examples

**`ReflectionMethod::hasPrototype()` example**

```php


<?php

class Hello
{
    public function sayHelloTo($name)
    {
        return 'Hello '.$name;
    }
}

class HelloWorld extends Hello
{
    public function sayHelloTo($name)
    {
        return 'Hello world: '.$name;
    }
}
$reflectionMethod = new ReflectionMethod('HelloWorld', 'sayHelloTo');
var_dump($reflectionMethod->hasPrototype());
?>

    
```

The above example will output:

```text


bool(true)

    
```

## See Also

`ReflectionMethod::getPrototype()`
