---
id: "en-php-function-splfileinfo-getfilename"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getFilename"
title: "Gets the filename"
signature: "public string SplFileInfo::getFilename()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the filename

## Description

```php
public string SplFileInfo::getFilename()
```

Gets the filename without any path information.

## Parameters

This function has no parameters.

## Return Values

The filename.

## Examples

**`SplFileInfo::getFilename()` example**

```php


<?php
$info = new SplFileInfo('foo.txt');
var_dump($info->getFilename());

$info = new SplFileInfo('/path/to/foo.txt');
var_dump($info->getFilename());

$info = new SplFileInfo('http://www.php.net/');
var_dump($info->getFilename());

$info = new SplFileInfo('http://www.php.net/svn.php');
var_dump($info->getFilename());
?>

    
```

The above example will output something similar to:

```text


string(7) "foo.txt"
string(7) "foo.txt"
string(11) "www.php.net"
string(7) "svn.php"

    
```

## See Also

`SplFileInfo::getBasename()`
