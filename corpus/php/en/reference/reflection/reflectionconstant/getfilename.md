---
id: "en-php-function-reflectionconstant-getfilename"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getFileName"
title: "Gets name of the defining file"
signature: "public string|false ReflectionConstant::getFileName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets name of the defining file

## Description

```php
public string|false ReflectionConstant::getFileName()
```

Gets the filename of the file in which the constant has been defined.

## Parameters

This function has no parameters.

## Return Values

Returns the filename of the file in which the constant has been defined. If the constant is defined in the PHP core or in a PHP extension, `false` is returned.
