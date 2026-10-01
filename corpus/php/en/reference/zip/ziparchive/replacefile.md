---
id: "en-php-function-ziparchive-replacefile"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::replaceFile"
title: "Replace file in ZIP archive with a given path"
signature: "public bool ZipArchive::replaceFile(string $filepath, int $index, int $start = 0, int $length = ZipArchive::LENGTH_TO_END, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.replacefile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replace file in ZIP archive with a given path

## Description

```php
public bool ZipArchive::replaceFile(string $filepath, int $index, int $start = 0, int $length = ZipArchive::LENGTH_TO_END, int $flags = 0)
```

Replace file in ZIP archive with a given path.

> For maximum portability, it is recommended to always use forward slashes (`/`) as directory separator in ZIP filenames.

## Parameters

- **`$filepath`** — The path to the file to add.
- **`$index`** — The index of the file to be replaced, its name is unchanged.
- **`$start`** — For partial copy, start position.
- **`$length`** — For partial copy, length to be copied, if `ZipArchive::LENGTH_TO_END` (0) the file size is used, if `ZipArchive::LENGTH_UNCHECKED` the whole file is used (starting from `$start`).
- **`$flags`** — Bitmask consisting of `ZipArchive::FL_ENC_GUESS`, `ZipArchive::FL_ENC_UTF_8`, `ZipArchive::FL_ENC_CP437`, `ZipArchive::FL_OPEN_FILE_NOW`. The behaviour of these constants is described on the ZIP constants page.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.3.0, PECL zip 1.22.1 | `ZipArchive::FL_OPEN_FILE_NOW` was added. |
| 8.3.0, PECL zip 1.22.2 | `ZipArchive::LENGTH_TO_END` and `ZipArchive::LENGTH_UNCHECKED` were added. |

## Examples

This example opens a ZIP file archive `test.zip` and replaces index 1 entry with `/path/to/index.txt`.

**Open and replace**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->replaceFile('/path/to/index.txt', 1);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

## See Also

`ZipArchive::addFile()`
