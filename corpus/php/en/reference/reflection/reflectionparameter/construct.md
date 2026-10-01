---
id: "en-php-function-reflectionparameter-construct"
language: "php"
lang: "en"
category: "function"
name: "ReflectionParameter::__construct"
title: "Construct"
signature: "public ReflectionParameter::__construct(string|array|object $function, int|string $param)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionparameter.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct

## Description

```php
public ReflectionParameter::__construct(string|array|object $function, int|string $param)
```

Constructs a `ReflectionParameter` instance.

## Parameters

- **`$function`** — The function to reflect parameters from.
- **`$param`** — Either an `integer` specifying the position of the parameter (starting with zero), or the parameter name as `string`.

## Examples

**Using the `ReflectionParameter` class**

```php


<?php
function foo($a, $b, $c) { }
function bar(Exception $a, &$b, $c) { }
function baz(ReflectionFunction $a, $b = 1, $c = null) { }
function abc() { }

$reflect = new ReflectionFunction('foo');

echo $reflect;

foreach ($reflect->getParameters() as $i => $param) {
    printf(
        "-- Parameter #%d: %s {\n".
        "   Class: %s\n".
        "   Allows NULL: %s\n".
        "   Passed to by reference: %s\n".
        "   Is optional?: %s\n".
        "}\n",
        $i, // $param->getPosition() can be used
        $param->getName(),
        var_export($param->getClass(), 1),
        var_export($param->allowsNull(), 1),
        var_export($param->isPassedByReference(), 1),
        $param->isOptional() ? 'yes' : 'no'
    );
}
?>

    
```

The above example will output something similar to:

```text


Function [ <user> function foo ] {
  @@ /Users/philip/cvs/phpdoc/a 2 - 2

  - Parameters [3] {
    Parameter #0 [ <required> $a ]
    Parameter #1 [ <required> $b ]
    Parameter #2 [ <required> $c ]
  }
}
-- Parameter #0: a {
   Class: NULL
   Allows NULL: true
   Passed to by reference: false
   Is optional?: no
}
-- Parameter #1: b {
   Class: NULL
   Allows NULL: true
   Passed to by reference: false
   Is optional?: no
}
-- Parameter #2: c {
   Class: NULL
   Allows NULL: true
   Passed to by reference: false
   Is optional?: no
}

    
```

## See Also

`ReflectionFunctionAbstract::getParameters()` `ReflectionFunction::__construct()` `ReflectionMethod::__construct()` Constructors
