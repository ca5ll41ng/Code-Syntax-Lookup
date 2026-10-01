---
id: "en-php-function-reflectionclass-isreadonly"
language: "php"
lang: "en"
category: "function"
name: "ReflectionClass::isReadOnly"
title: "Checks if class is readonly"
signature: "public bool ReflectionClass::isReadOnly()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionclass.isreadonly.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if class is readonly

## Description

```php
public bool ReflectionClass::isReadOnly()
```

Checks if a class is readonly.

## Parameters

This function has no parameters.

## Return Values

`true` if a class is readonly, `false` otherwise.

## Examples

**`ReflectionClass::isReadOnly()` example**

```php


<?php
class TestClass { }
readonly class TestReadOnlyClass { }

$normalClass = new ReflectionClass('TestClass');
$readonlyClass = new ReflectionClass('TestReadOnlyClass');

var_dump($normalClass->isReadOnly());
var_dump($readonlyClass->isReadOnly());

?>

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```

## See Also

`ReflectionClass::isAbstract()` Readonly classes
