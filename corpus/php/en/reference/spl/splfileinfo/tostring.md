---
id: "en-php-function-splfileinfo-tostring"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::__toString"
title: "Returns the path to the file as a string"
signature: "public string SplFileInfo::__toString()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the path to the file as a string

## Description

```php
public string SplFileInfo::__toString()
```

This method will return the file name of the referenced file.

## Parameters

This function has no parameters.

## Return Values

Returns the path to the file.

## Examples

**`SplFileInfo::__toString()` example**

```php


<?php
$info = new SplFileInfo('foo');
var_dump($info->__toString());
echo $info.PHP_EOL;

$info = new SplFileInfo('/usr/bin/php');
var_dump($info->__toString());
echo $info.PHP_EOL;
?>

    
```

The above example will output something similar to:

```text


string(3) "foo"
foo
string(12) "/usr/bin/php"
/usr/bin/php 

    
```
