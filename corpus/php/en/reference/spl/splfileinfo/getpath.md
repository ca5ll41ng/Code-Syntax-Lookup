---
id: "en-php-function-splfileinfo-getpath"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getPath"
title: "Gets the path without filename"
signature: "public string SplFileInfo::getPath()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the path without filename

## Description

```php
public string SplFileInfo::getPath()
```

Returns the path to the file, omitting the filename and any trailing slash.

## Parameters

This function has no parameters.

## Return Values

Returns the path to the file.

## Examples

**`SplFileInfo::getPath()` example**

```php


<?php
$info = new SplFileInfo('/usr/bin/php');
var_dump($info->getPath());


$info = new SplFileInfo('/usr/');
var_dump($info->getPath());?>

    
```

The above example will output something similar to:

```text


string(8) "/usr/bin"
string(4) "/usr"

    
```

## See Also

`SplFileInfo::getRealPath()` `SplFileInfo::getFilename()` `SplFileInfo::getPathInfo()`
