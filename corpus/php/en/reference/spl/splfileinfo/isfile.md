---
id: "en-php-function-splfileinfo-isfile"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::isFile"
title: "Tells if the object references a regular file"
signature: "public bool SplFileInfo::isFile()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.isfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells if the object references a regular file

## Description

```php
public bool SplFileInfo::isFile()
```

Checks if the file referenced by this SplFileInfo object exists and is a regular file.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the file exists and is a regular file (not a link), `false` otherwise.

## Examples

**`SplFileInfo::isFile()` example**

```php


<?php
$info = new SplFileInfo(__FILE__);
var_dump($info->isFile());

$info = new SplFileInfo(dirname(__FILE__));
var_dump($info->isFile());
?>

    
```

The above example will output something similar to:

```text


bool(true)
bool(false)

    
```
