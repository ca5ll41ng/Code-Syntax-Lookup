---
id: "en-php-function-splfileinfo-getinode"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getInode"
title: "Gets the inode for the file"
signature: "public int|false SplFileInfo::getInode()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getinode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the inode for the file

## Description

```php
public int|false SplFileInfo::getInode()
```

Gets the inode number for the filesystem object.

## Parameters

This function has no parameters.

## Return Values

Returns the inode number for the filesystem object on success, or `false` on failure.

## Errors/Exceptions

Throws `RuntimeException` on error.

## See Also

`fileinode()`
