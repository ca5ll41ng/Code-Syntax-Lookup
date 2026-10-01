---
id: "en-php-function-splfileinfo-isdir"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::isDir"
title: "Tells if the file is a directory"
signature: "public bool SplFileInfo::isDir()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.isdir.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells if the file is a directory

## Description

```php
public bool SplFileInfo::isDir()
```

This method can be used to determine if the file is a directory.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if a directory, `false` otherwise.

## Examples

**`SplFileInfo::isDir()` example**

```php


<?php
$d = new SplFileInfo(dirname(__FILE__));
var_dump($d->isDir());

$d = new SplFileInfo(__FILE__);
var_dump($d->isDir());
?>

    
```

The above example will output something similar to:

```text


bool(true)
bool(false)

    
```
