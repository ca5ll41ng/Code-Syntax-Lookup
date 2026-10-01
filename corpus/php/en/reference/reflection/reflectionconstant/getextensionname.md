---
id: "en-php-function-reflectionconstant-getextensionname"
language: "php"
lang: "en"
category: "function"
name: "ReflectionConstant::getExtensionName"
title: "Gets name of the defining extension"
signature: "public string|false ReflectionConstant::getExtensionName()"
module: "reflection"
source_url: "https://www.php.net/manual/en/reflectionconstant.getextensionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets name of the defining extension

## Description

```php
public string|false ReflectionConstant::getExtensionName()
```

Gets the name of the extension which defined the constant.

## Parameters

This function has no parameters.

## Return Values

The name of the extension which defined the constant, or `false` for user-defined constants.

## Examples

**Basic usage of `ReflectionConstant::getExtensionName()`**

```php


<?php
var_dump((new ReflectionConstant('SQLITE3_TEXT'))->getExtensionName());
?>

   
```

The above example will output:

```text


string(7) "sqlite3"

   
```

## See Also

 `ReflectionConstant::getExtension()`
