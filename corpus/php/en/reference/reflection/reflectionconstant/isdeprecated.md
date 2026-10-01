---
id: "en-php-function-reflectionconstant-isdeprecated"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::isDeprecated"
title: "Checks if deprecated"
signature: "public bool ReflectionConstant::isDeprecated()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.isdeprecated.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if deprecated

## Description

```php
public bool ReflectionConstant::isDeprecated()
```

Checks whether the constant is deprecated.

## Parameters

This function has no parameters.

## Return Values

`true` if it's deprecated, otherwise `false`

## Examples

**`ReflectionConstant::isDeprecated()` example**

```php


<?php
// E_STRICT is deprecated as of PHP 8.4
var_dump((new ReflectionConstant('E_STRICT'))->isDeprecated());
?>

   
```

Output of the above example in PHP 8.4:

```text


bool(true)

   
```
