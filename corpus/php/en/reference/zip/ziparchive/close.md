---
id: "en-php-function-ziparchive-close"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::close"
title: "Close the active archive (opened or newly created)"
signature: "public bool ZipArchive::close()"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Close the active archive (opened or newly created)

## Description

```php
public bool ZipArchive::close()
```

Close opened or created archive and save changes. This method is automatically called at the end of the script.

> All modifications to the archive (adding, removing, or renaming entries) are performed in memory and only written to disk when this method is called. As a result, errors related to file system operations (such as permission denied or missing directories) will only surface at close time rather than when the modification methods are called.

If the archive contains no files, the file is completely removed by default (no empty archive is written) according to the value of the `ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE` global flag.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ZipArchive::setArchiveFlag()`
