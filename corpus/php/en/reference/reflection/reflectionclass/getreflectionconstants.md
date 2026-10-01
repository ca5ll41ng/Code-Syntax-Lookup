---
id: "en-php-function-reflectionclass-getreflectionconstants"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::getReflectionConstants"
title: "Gets class constants"
signature: "public array ReflectionClass::getReflectionConstants(int|null $filter = null)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.getreflectionconstants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets class constants

## Description

```php
public array ReflectionClass::getReflectionConstants(int|null $filter = null)
```

Retrieves reflected constants.

## Parameters

- **`$filter`** — The optional filter, for filtering desired constant visibilities. It's configured using the ReflectionClassConstant constants, and defaults to all constant visibilities.

## Return Values

An array of `ReflectionClassConstant` objects.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$filter` has been added. |

## Examples

**Basic `ReflectionClass::getReflectionConstants()` example**

```php


<?php
class Foo {
    public    const FOO  = 1;
    protected const BAR  = 2;
    private   const BAZ  = 3;
}

$foo = new Foo();

$reflect = new ReflectionClass($foo);
$consts  = $reflect->getReflectionConstants();

foreach ($consts as $const) {
    print $const->getName() . "\n";
}

var_dump($consts);

?>

   
```

The above example will output something similar to:

```text


FOO
BAR
BAZ
array(3) {
  [0]=>
  object(ReflectionClassConstant)#3 (2) {
    ["name"]=>
    string(3) "FOO"
    ["class"]=>
    string(3) "Foo"
  }
  [1]=>
  object(ReflectionClassConstant)#4 (2) {
    ["name"]=>
    string(3) "BAR"
    ["class"]=>
    string(3) "Foo"
  }
  [2]=>
  object(ReflectionClassConstant)#5 (2) {
    ["name"]=>
    string(3) "BAZ"
    ["class"]=>
    string(3) "Foo"
  }
}

   
```

## See Also

`ReflectionClass::getReflectionConstant()` `ReflectionClassConstant`
