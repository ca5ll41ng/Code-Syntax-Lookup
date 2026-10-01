---
id: "en-php-function-reflectionconstant-getshortname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getShortName"
title: "Gets short name"
signature: "public string ReflectionConstant::getShortName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getshortname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets short name

## Description

```php
public string ReflectionConstant::getShortName()
```

Gets the short name of the constant, the part without the namespace.

## Parameters

This function has no parameters.

## Return Values

The short name of the constant.

## Examples

**`ReflectionConstant::getShortName()` example**

```php


<?php
namespace Foo;

const BAR = 'bar';

echo (new \ReflectionConstant('Foo\BAR'))->getShortName();
?>

   
```

The above example will output:

```text


BAR

   
```

## See Also

 `ReflectionConstant::getName()`
