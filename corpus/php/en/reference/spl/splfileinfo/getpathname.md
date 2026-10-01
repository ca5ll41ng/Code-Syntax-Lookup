---
id: "en-php-function-splfileinfo-getpathname"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getPathname"
title: "Gets the path to the file"
signature: "public string SplFileInfo::getPathname()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getpathname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the path to the file

## Description

```php
public string SplFileInfo::getPathname()
```

Returns the path to the file.

## Parameters

This function has no parameters.

## Return Values

The path to the file.

## Examples

**`SplFileInfo::getPathname()` example**

```php


<?php
$info = new SplFileInfo('/usr/bin/php');
var_dump($info->getPathname());
?>

    
```

The above example will output something similar to:

```text


string(12) "/usr/bin/php"

    
```

## See Also

`SplFileInfo::getRealPath()`
