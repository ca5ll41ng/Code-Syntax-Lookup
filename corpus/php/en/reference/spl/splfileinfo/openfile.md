---
id: "en-php-function-splfileinfo-openfile"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::openFile"
title: "Gets an SplFileObject object for the file"
signature: "public SplFileObject SplFileInfo::openFile(string $mode = \"r\", bool $useIncludePath = false, resource|null $context = null)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.openfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets an SplFileObject object for the file

## Description

```php
public SplFileObject SplFileInfo::openFile(string $mode = "r", bool $useIncludePath = false, resource|null $context = null)
```

Creates an `SplFileObject` `object` of the file. This is useful because `SplFileObject` contains additional methods for manipulating the file whereas `SplFileInfo` is only useful for gaining information, like whether the file is writable.

## Parameters

- **`$mode`** — The mode for opening the file. See the `fopen()` documentation for descriptions of possible modes. The default is read only.
- **`$useIncludePath`** — When set to `true`, the filename is also searched for within the include_path
- **`$context`** — Refer to the context section of the manual for a description of `contexts`.

## Return Values

The opened file as an `SplFileObject` `object`.

## Errors/Exceptions

A `RuntimeException` if the file cannot be opened (e.g. insufficient access rights).

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$context` is now nullable. |

## Examples

**`SplFileInfo::openFile()` example**

```php


<?php
$fileinfo = new SplFileInfo('/tmp/foo.txt');

if ($fileinfo->isWritable()) {

    $fileobj = $fileinfo->openFile('a');

    $fileobj->fwrite("appended this sample text");
}
?>

    
```

## See Also

`SplFileObject` `stream_context_create()` `fopen()`
