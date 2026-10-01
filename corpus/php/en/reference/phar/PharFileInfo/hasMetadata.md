---
id: "en-php-function-pharfileinfo-hasmetadata"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::hasMetadata"
title: "Returns the metadata of the entry"
signature: "public bool PharFileInfo::hasMetadata()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.hasmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the metadata of the entry

## Description

```php
public bool PharFileInfo::hasMetadata()
```

Returns the metadata of a file within a phar archive.

## Parameters

No parameters.

## Return Values

Returns `false` if no metadata is set or is `null`, `true` if metadata is not `null`

## See Also

`PharFileInfo::setMetadata()` `PharFileInfo::getMetadata()` `PharFileInfo::delMetadata()` `Phar::setMetadata()` `Phar::hasMetadata()` `Phar::getMetadata()`
