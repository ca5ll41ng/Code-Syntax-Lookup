---
id: "en-php-function-reflectionparameter-getdefaultvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::getDefaultValue"
title: "Gets default parameter value"
signature: "public mixed ReflectionParameter::getDefaultValue()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.getdefaultvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets default parameter value

## Description

```php
public mixed ReflectionParameter::getDefaultValue()
```

Gets the default value of the parameter for any user-defined or internal function or method. If the parameter is not optional a `ReflectionException` will be thrown.

## Parameters

This function has no parameters.

## Return Values

The parameters default value.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This method now allows getting the default value of parameters of built-in functions and built-in class methods. Previously, a `ReflectionException` was thrown. |

## Examples

**Getting default values of function parameters**

```php


<?php
function foo($test, $bar = 'baz')
{
    echo $test . $bar;
}

$function = new ReflectionFunction('foo');

foreach ($function->getParameters() as $param) {
    echo 'Name: ' . $param->getName() . PHP_EOL;
    if ($param->isOptional()) {
        echo 'Default value: ' . $param->getDefaultValue() . PHP_EOL;
    }
    echo PHP_EOL;
}
?>

    
```

The above example will output:

```text


Name: test

Name: bar
Default value: baz

   
```

## See Also

`ReflectionParameter::isOptional()` `ReflectionParameter::isDefaultValueAvailable()` `ReflectionParameter::getDefaultValueConstantName()` `ReflectionParameter::isPassedByReference()`
