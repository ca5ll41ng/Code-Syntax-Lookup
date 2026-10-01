---
id: "en-php-function-reflectionfunctionabstract-getclosurecalledclass"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::getClosureCalledClass"
title: "Returns the class corresponding to static:: inside a closure"
signature: "public ReflectionClass|null ReflectionFunctionAbstract::getClosureCalledClass()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.getclosurecalledclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the class corresponding to static:: inside a closure

## Description

```php
public ReflectionClass|null ReflectionFunctionAbstract::getClosureCalledClass()
```

Returns the class as a `ReflectionClass` that corresponds to resolving the class name corresponding to `static::` inside the `Closure`.

## Parameters

This function has no parameters.

## Return Values

Returns a `ReflectionClass` corresponding to the class represented by `static::` in the `Closure`. If the function is not a closure or if it has global scope `null` is returned instead.

## Examples

**Example showcasing difference between `ReflectionFunctionAbstract::getClosureCalledClass()`, `ReflectionFunctionAbstract::getClosureScopeClass()`, and `ReflectionFunctionAbstract::getClosureThis()` with a closure in the object context**

```php


<?php

class A
{
    public function getClosure()
    {
        var_dump(self::class, static::class);

        return function() {};
    }
}

class B extends A {}

$b = new B();
$c = $b->getClosure();
$r = new ReflectionFunction($c);

var_dump($r->getClosureThis()); // $this === $b, since a non-static closure take the object context
var_dump($r->getClosureScopeClass()); // Corresponds to the self::class resolution inside a closure
var_dump($r->getClosureCalledClass()); // Corresponds to the static::class resolution inside a closure

?>

   
```

The above example will output:

```text


string(1) "A"
string(1) "B"
object(B)#1 (0) {
}
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "A"
}
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "B"
}

   
```

**Example showcasing difference between `ReflectionFunctionAbstract::getClosureCalledClass()`, `ReflectionFunctionAbstract::getClosureScopeClass()`, and `ReflectionFunctionAbstract::getClosureThis()` with a static closure without an object context**

```php

    
<?php

class A
{
    public function getClosure()
    {
        var_dump(self::class, static::class);

        return static function() {};
    }
}

class B extends A {}

$b = new B();
$c = $b->getClosure();
$r = new ReflectionFunction($c);

var_dump($r->getClosureThis()); // NULL, since the pseudo-variable $this is not available in a static context
var_dump($r->getClosureScopeClass()); // Corresponds to the self::class resolution inside a closure
var_dump($r->getClosureCalledClass()); // Corresponds to the static::class resolution inside a closure

?>

   
```

The above example will output:

```text


string(1) "A"
string(1) "B"
NULL
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "A"
}
object(ReflectionClass)#4 (1) {
  ["name"]=>
  string(1) "B"
}


   
```

## See Also

 `ReflectionFunctionAbstract::getClosureScopeClass()` `ReflectionFunctionAbstract::getClosureThis()` `language.oop5.late-static-bindings`
