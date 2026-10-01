---
id: "en-php-function-reflectionfunctionabstract-getclosureusedvariables"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunctionAbstract::getClosureUsedVariables"
title: "Returns an array of the used variables in the Closure"
signature: "public array ReflectionFunctionAbstract::getClosureUsedVariables()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunctionabstract.getclosureusedvariables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of the used variables in the Closure

## Description

```php
public array ReflectionFunctionAbstract::getClosureUsedVariables()
```

Returns an `array` of the used variables in the `Closure`.

## Parameters

This function has no parameters.

## Return Values

Returns an `array` of the used variables in the `Closure`.

## Examples

**`ReflectionFunctionAbstract::getClosureUsedVariables()` example**

```php


<?php

$one = 1;
$two = 2;

$function = function() use ($one, $two) {
    static $three = 3;
};

$reflector = new ReflectionFunction($function);

var_dump($reflector->getClosureUsedVariables());
?>

    
```

The above example will output something similar to:

```text


array(2) {
  ["one"]=>
  int(1)
  ["two"]=>
  int(2)
}

    
```

## See Also

`ReflectionFunctionAbstract::getClosureScopeClass()` `ReflectionFunctionAbstract::getClosureThis()`
