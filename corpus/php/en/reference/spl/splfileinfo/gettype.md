---
id: "en-php-function-splfileinfo-gettype"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getType"
title: "Gets file type"
signature: "public string|false SplFileInfo::getType()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets file type

## Description

```php
public string|false SplFileInfo::getType()
```

Returns the type of the file referenced.

## Parameters

This function has no parameters.

## Return Values

A `string` representing the type of the entry. May be one of `file`, `link`, `dir`, `block`, `fifo`, `char`, `socket`, or `unknown`, or `false` on failure.

## Errors/Exceptions

Throws a `RuntimeException` on error.

## Examples

**`SplFileInfo::getType()` example**

```php


<?php

$info = new SplFileInfo(__FILE__);
echo $info->getType().PHP_EOL;

$info = new SplFileInfo(dirname(__FILE__));
echo $info->getType();

?>

    
```

The above example will output something similar to:

```text


file
dir

    
```
