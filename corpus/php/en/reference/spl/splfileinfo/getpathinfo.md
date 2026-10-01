---
id: "en-php-function-splfileinfo-getpathinfo"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getPathInfo"
title: "Gets an SplFileInfo object for the path"
signature: "public SplFileInfo|null SplFileInfo::getPathInfo(string|null $class = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getpathinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets an SplFileInfo object for the path

## Description

```php
public SplFileInfo|null SplFileInfo::getPathInfo(string|null $class = null)
```

Gets an `SplFileInfo` object for the parent of the current file.

## Parameters

- **`$class`** — Name of an `SplFileInfo` derived class to use, or itself if `null`.

## Return Values

Returns an `SplFileInfo` object for the parent path of the file on success, or `null` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$class` is now nullable. |

## Examples

**`SplFileInfo::getPathInfo()` example**

```php


<?php
$info = new SplFileInfo('/usr/bin/php');
$parent_info = $info->getPathInfo();
var_dump($parent_info->getRealPath());
?>

    
```

The above example will output something similar to:

```text


string(8) "/usr/bin"

    
```

## See Also

`SplFileInfo::setInfoClass()`
