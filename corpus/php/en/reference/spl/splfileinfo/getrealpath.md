---
id: "en-php-function-splfileinfo-getrealpath"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getRealPath"
title: "Gets absolute path to file"
signature: "public string|false SplFileInfo::getRealPath()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getrealpath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets absolute path to file

## Description

```php
public string|false SplFileInfo::getRealPath()
```

This method expands all symbolic links, resolves relative references and returns the real path to the file.

## Parameters

This function has no parameters.

## Return Values

Returns the path to the file, or `false` if the file does not exist.

## Examples

**`SplFileInfo::getRealPath()` example**

```php


<?php
$info = new SplFileInfo('/..//./../../'.__FILE__);
var_dump($info->getRealPath());

$info = new SplFileInfo('/tmp');
var_dump($info->getRealPath());

$info = new SplFileInfo('/I/Do/Not/Exist');
var_dump($info->getRealPath());

$info = new SplFileInfo('php://output');
var_dump($info->getRealPath());

$info = new SplFileInfo("");
var_dump($info->getRealPath());
?>

    
```

The above example will output something similar to:

```text


string(28) "/private/tmp/phptempfile.php" 
string(12) "/private/tmp"
bool(false)
bool(false)
string(12) "/private/tmp" 

    
```

## See Also

`SplFileInfo::isLink()` `realpath()`
