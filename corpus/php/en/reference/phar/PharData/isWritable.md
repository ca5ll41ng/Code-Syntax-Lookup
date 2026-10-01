---
id: "en-php-function-phardata-iswritable"
language: "php"
lang: "en"
category: "function"
name: "PharData::isWritable"
title: "Returns true if the tar/zip archive can be modified"
signature: "public bool PharData::isWritable()"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.iswritable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns true if the tar/zip archive can be modified

## Description

```php
public bool PharData::isWritable()
```

This method returns `true` if the tar/zip archive on disk is not read-only. Unlike `Phar::isWritable()`, data-only tar/zip archives can be modified even if `phar.readonly` is set to `1`.

## Parameters

No parameters.

## Return Values

Returns `true` if the tar/zip archive can be modified

## See Also

`Phar::canWrite()` `Phar::isWritable()`
