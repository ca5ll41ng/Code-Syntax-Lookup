---
id: "en-php-function-reflectionconstant-getvalue"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getValue"
title: "Gets value"
signature: "public mixed ReflectionConstant::getValue()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets value

## Description

```php
public mixed ReflectionConstant::getValue()
```

Gets the value of the constant.

## Parameters

This function has no parameters.

## Return Values

The value of the constant.

## Examples

**`ReflectionProperty::getValue()` example**

```php


<?php
const FOO = 'foo';

var_dump((new \ReflectionConstant('FOO'))->getValue());
?>

   
```

The above example will output:

```text


string(3) "foo"

   
```
