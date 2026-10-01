---
id: "en-php-function-splfileinfo-getfileinfo"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getFileInfo"
title: "Gets an SplFileInfo object for the file"
signature: "public SplFileInfo SplFileInfo::getFileInfo(string|null $class = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getfileinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets an SplFileInfo object for the file

## Description

```php
public SplFileInfo SplFileInfo::getFileInfo(string|null $class = null)
```

This method gets an `SplFileInfo` object for the referenced file.

## Parameters

- **`$class`** — Name of an `SplFileInfo` derived class to use.

## Return Values

An `SplFileInfo` object created for the file.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$class` is now nullable. |

## See Also

`SplFileInfo::setInfoClass()`
