---
id: "en-php-function-reflectionconstant-getnamespacename"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getNamespaceName"
title: "Gets namespace name"
signature: "public string ReflectionConstant::getNamespaceName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getnamespacename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets namespace name

## Description

```php
public string ReflectionConstant::getNamespaceName()
```

Gets the namespace name of the constant.

## Parameters

This function has no parameters.

## Return Values

The namespace name, or an empty string for the global namespace.

## Examples

**`ReflectionConstant::getNamespaceName()` example**

```php


<?php
namespace Foo {
   const BAR = 'bar';
   var_dump((new \ReflectionConstant('Foo\BAR'))->getNamespaceName());
}

namespace {
   const BAR = 'bar';
   var_dump((new \ReflectionConstant('BAR'))->getNamespaceName());
}
?>

   
```

The above example will output:

```text


string(3) "Foo"
string(0) ""

   
```
