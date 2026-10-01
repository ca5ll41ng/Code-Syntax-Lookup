---
id: "en-php-function-reflectionconstant-getname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getName"
title: "Gets name"
signature: "public string ReflectionConstant::getName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets name

## Description

```php
public string ReflectionConstant::getName()
```

Gets the name of the constant.

## Parameters

This function has no parameters.

## Return Values

The constants name, which is composed of its namespace and name.

## Examples

**`ReflectionConstant::getName()` example**

```php


<?php
namespace Foo;

const BAR = 'bar';

echo (new \ReflectionConstant('Foo\BAR'))->getName();
?>

   
```

The above example will output:

```text


Foo\BAR

   
```

## See Also

 `ReflectionConstant::getNamespaceName()`
