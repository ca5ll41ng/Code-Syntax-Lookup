---
id: "en-php-function-reflectionconstant-getextension"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getExtension"
title: "Gets `ReflectionExtension` of the defining extension"
signature: "public ReflectionExtension|null ReflectionConstant::getExtension()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getextension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets `ReflectionExtension` of the defining extension

## Description

```php
public ReflectionExtension|null ReflectionConstant::getExtension()
```

Gets a `ReflectionExtension` object for the extension which defined the constant.

## Parameters

This function has no parameters.

## Return Values

A `ReflectionExtension` object representing the extension which defined the constant, or `null` for user-defined constants.

## Examples

**Basic usage of `ReflectionConstant::getExtension()`**

```php


<?php
var_dump((new ReflectionConstant('SQLITE3_TEXT'))->getExtension());
?>

   
```

The above example will output:

```text


object(ReflectionExtension)#2 (1) {
  ["name"]=>
  string(7) "sqlite3"
}

   
```

## See Also

 `ReflectionConstant::getExtensionName()`
