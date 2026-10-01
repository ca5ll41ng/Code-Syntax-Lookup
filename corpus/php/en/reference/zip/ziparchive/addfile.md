---
id: "en-php-function-ziparchive-addfile"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::addFile"
title: "Adds a file to a ZIP archive from the given path"
signature: "public bool ZipArchive::addFile(string $filepath, string $entryname = \"\", int $start = 0, int $length = ZipArchive::LENGTH_TO_END, int $flags = ZipArchive::FL_OVERWRITE)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.addfile.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a file to a ZIP archive from the given path

## Description

```php
public bool ZipArchive::addFile(string $filepath, string $entryname = "", int $start = 0, int $length = ZipArchive::LENGTH_TO_END, int $flags = ZipArchive::FL_OVERWRITE)
```

Adds a file to a ZIP archive from a given path.

> For maximum portability, it is recommended to always use forward slashes (`/`) as directory separator in ZIP filenames.

## Parameters

- **`$filepath`** — The path to the file to add.
- **`$entryname`** — If supplied and not empty, this is the local name inside the ZIP archive that will override the `$filepath`.
- **`$start`** — For partial copy, start position.
- **`$length`** — For partial copy, length to be copied, if `ZipArchive::LENGTH_TO_END` (0) the file size is used, if `ZipArchive::LENGTH_UNCHECKED` the whole file is used (starting from `$start`).
- **`$flags`** — Bitmask consisting of `ZipArchive::FL_OVERWRITE`, `ZipArchive::FL_ENC_GUESS`, `ZipArchive::FL_ENC_UTF_8`, `ZipArchive::FL_ENC_CP437`, `ZipArchive::FL_OPEN_FILE_NOW`. The behaviour of these constants is described on the ZIP constants page.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL zip 1.18.0 | `$flags` was added. |
| 8.3.0, PECL zip 1.22.1 | `ZipArchive::FL_OPEN_FILE_NOW` was added. |
| 8.3.0, PECL zip 1.22.2 | `ZipArchive::LENGTH_TO_END` and `ZipArchive::LENGTH_UNCHECKED` were added. |

## Examples

This example opens a ZIP file archive `test.zip` and add the file `/path/to/index.txt`. as `newname.txt`.

**Open and add**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->addFile('/path/to/index.txt', 'newname.txt');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

## Notes

> When a file is set to be added to the archive, PHP will lock the file. The lock is only released once the `ZipArchive` object has been closed, either via `ZipArchive::close()` or the `ZipArchive` object being destroyed. This may prevent you from being able to delete the file being added until after the lock has been released.

## See Also

`ZipArchive::replaceFile()`
