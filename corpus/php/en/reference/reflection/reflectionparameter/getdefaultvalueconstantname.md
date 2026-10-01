---
id: "en-php-function-reflectionparameter-getdefaultvalueconstantname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::getDefaultValueConstantName"
title: "Returns the default value's constant name if default value is constant or null"
signature: "public string|null ReflectionParameter::getDefaultValueConstantName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.getdefaultvalueconstantname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the default value's constant name if default value is constant or null

## Description

```php
public string|null ReflectionParameter::getDefaultValueConstantName()
```

Returns the default value's constant name of the parameter of any user-defined or internal function or method, if default value is constant or null. If the parameter is not optional a `ReflectionException` will be thrown.

## Parameters

This function has no parameters.

## Return Values

Returns string on success or `null` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This method now allows getting the default values' constant names of built-in functions and built-in class methods. Previously, a `ReflectionException` was thrown. |

## Examples

**Getting default values' constant names of function parameters**

```php


<?php
function foo($test, $bar = PHP_INT_MIN)
{
    echo $test . $bar;
}

$function = new ReflectionFunction('foo');

foreach ($function->getParameters() as $param) {
    echo 'Name: ' . $param->getName() . PHP_EOL;
    if ($param->isOptional()) {
        echo 'Default value: ' . $param->getDefaultValueConstantName() . PHP_EOL;
    }
    echo PHP_EOL;
}
?>

    
```

The above example will output:

```text


Name: test

Name: bar
Default value: PHP_INT_MIN

   
```

## See Also

`ReflectionParameter::isOptional()` `ReflectionParameter::isDefaultValueConstant()` `ReflectionParameter::getDefaultValue()`
