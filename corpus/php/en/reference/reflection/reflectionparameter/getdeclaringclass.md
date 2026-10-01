---
id: "en-php-function-reflectionparameter-getdeclaringclass"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::getDeclaringClass"
title: "Gets declaring class"
signature: "public ReflectionClass|null ReflectionParameter::getDeclaringClass()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.getdeclaringclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets declaring class

## Description

```php
public ReflectionClass|null ReflectionParameter::getDeclaringClass()
```

Gets the declaring class.

## Parameters

This function has no parameters.

## Return Values

A `ReflectionClass` object or `null` if called on function.

## Examples

**Getting the class that declared the method**

```php


<?php
class Foo
{
    public function bar(\DateTime $datetime)
    {
    }
}

class Baz extends Foo
{
}

$param = new \ReflectionParameter(['Baz', 'bar'], 0); 

var_dump($param->getDeclaringClass());

    
```

The above example will output:

```text


object(ReflectionClass)#2 (1) {
  ["name"]=>
  string(3) "Foo"
}

   
```

## See Also

`ReflectionParameter::getClass()`
