---
id: "en-php-function-reflectionfunction-construct"
language: "php"
lang: "en"
category: "function"
name: "ReflectionFunction::__construct"
title: "Constructs a ReflectionFunction object"
signature: "public ReflectionFunction::__construct(Closure|string $function)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionfunction.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a ReflectionFunction object

## Description

```php
public ReflectionFunction::__construct(Closure|string $function)
```

Constructs a `ReflectionFunction` object.

## Parameters

- **`$function`** — The name of the function to reflect or a closure.

## Errors/Exceptions

A `ReflectionException` if the `$function` parameter does not contain a valid function.

## Examples

**`ReflectionFunction::__construct()` example**

```php


<?php
/**
 * A simple counter
 *
 * @return    int
 */
function counter1()
{
    static $c = 0;
    return ++$c;
}

/**
 * Another simple counter
 *
 * @return    int
 */
$counter2 = function()
{
    static $d = 0;
    return ++$d;

};

function dumpReflectionFunction($func)
{
    // Print out basic information
    printf(
        "\n\n===> The %s function '%s'\n".
        "     declared in %s\n".
        "     lines %d to %d\n",
        $func->isInternal() ? 'internal' : 'user-defined',
        $func->getName(),
        $func->getFileName(),
        $func->getStartLine(),
        $func->getEndline()
    );

    // Print documentation comment
    printf("---> Documentation:\n %s\n", var_export($func->getDocComment(), true));

    // Print static variables if existent
    if ($statics = $func->getStaticVariables())
    {
        printf("---> Static variables: %s\n", var_export($statics, true));
    }
}

// Create an instance of the ReflectionFunction class
dumpReflectionFunction(new ReflectionFunction('counter1'));
dumpReflectionFunction(new ReflectionFunction($counter2));
?>

    
```

The above example will output something similar to:

```text


===> The user-defined function 'counter1'
     declared in Z:\reflectcounter.php
     lines 7 to 11
---> Documentation:
 '/**
 * A simple counter
 *
 * @return    int
 */'
---> Static variables: array (
  'c' => 0,
)


===> The user-defined function '{closure}'
     declared in Z:\reflectcounter.php
     lines 18 to 23
---> Documentation:
 '/**
 * Another simple counter
 *
 * @return    int
 */'
---> Static variables: array (
  'd' => 0,
)

    
```

## See Also

`ReflectionMethod::__construct()` Constructors
