---
id: "en-php-function-reflectionfunction-invokeargs"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::invokeArgs"
title: "Invokes function args"
signature: "public mixed ReflectionFunction::invokeArgs(array $args)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.invokeargs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Invokes function args

## Description

```php
public mixed ReflectionFunction::invokeArgs(array $args)
```

Invokes the function and pass its arguments as array.

## Parameters

- **`$args`** — The parameters to be passed to the function, as an `array`, much like `call_user_func_array()` works. — If the keys of `$args` are all numeric, the keys are ignored and each element is passed to the function as a positional argument, in order. — If any keys of `$args` are strings, those elements are passed to the function as named arguments, with the name given by the key. — An Error is thrown if a numeric key in `$args` appears after a string key, or if a string key does not match the name of any parameter of the function.

## Return Values

Returns the result of the invoked function

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$args` keys will now be interpreted as parameter names, instead of being silently ignored. |

## Examples

**`ReflectionFunction::invokeArgs()` example**

```php


<?php
function title($title, $name)
{
    return sprintf("%s. %s\r\n", $title, $name);
}

$function = new ReflectionFunction('title');

echo $function->invokeArgs(array('Dr', 'Phil'));
?>

    
```

The above example will output:

```text


Dr. Phil

    
```

**`ReflectionFunction::invokeArgs()` with references example**

```php


<?php
function get_false_conditions(array $conditions, array &$false_conditions)
{
    foreach ($conditions as $condition) {
        if (!$condition) {
            $false_conditions[] = $condition;
        }
    }
}

$function_ref     = new ReflectionFunction('get_false_conditions');

$conditions       = array(true, false, -1, 0, 1);
$false_conditions = array();

$function_ref->invokeArgs(array($conditions, &$false_conditions));

var_dump($false_conditions);
?>

    
```

The above example will output:

```text


array(2) {
  [0]=>
  bool(false)
  [1]=>
  int(0)
}

    
```

## Notes

> If the function has arguments that need to be references, then they must be references in the passed argument list.

## See Also

`ReflectionFunction::invoke()` `ReflectionFunctionAbstract::getNumberOfParameters()` __invoke() `call_user_func_array()`
