---
id: "en-php-function-reflectionmethod-createfrommethodname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionMethod::createFromMethodName"
title: "Creates a new ReflectionMethod"
signature: "public static static ReflectionMethod::createFromMethodName(string $method)"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionmethod.createfrommethodname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new ReflectionMethod

## Description

```php
public static static ReflectionMethod::createFromMethodName(string $method)
```

Creates a new `ReflectionMethod`.

## Parameters

- **`$method`** — Class name and method name delimited by `::`.

## Return Values

Returns a new `ReflectionMethod` on success.

## Errors/Exceptions

A `ReflectionException` is thrown if the given method does not exist.

## Examples

**`ReflectionMethod::createFromMethodName()` example**

```php


<?php

class Foo {
    public function bar() {

    }
}

$methodInfo = ReflectionMethod::createFromMethodName("Foo::bar");
var_dump($methodInfo);
?>

    
```

The above example will output:

```text


object(ReflectionMethod)#1 (2) {
  ["name"]=>
  string(3) "bar"
  ["class"]=>
  string(3) "Foo"
}

    
```
