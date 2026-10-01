---
id: "en-php-function-ziparchive-open"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::open"
title: "Open a ZIP file archive"
signature: "public bool|int ZipArchive::open(string $filename, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.open.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Open a ZIP file archive

## Description

```php
public bool|int ZipArchive::open(string $filename, int $flags = 0)
```

Opens a new or existing zip archive for reading, writing or modifying.

Since libzip 1.6.0, an empty file is not a valid archive any longer.

> When creating a new archive with `ZipArchive::CREATE`, the file is not actually written to disk until `ZipArchive::close()` is called. Therefore, errors related to the file system (such as permission denied or a non-existent parent directory) will only be reported when calling `ZipArchive::close()`, not when calling this method.

## Parameters

- **`$filename`** — The file name of the ZIP archive to open.
- **`$flags`** — The mode to use to open the archive. - `ZipArchive::OVERWRITE` - `ZipArchive::CREATE` - `ZipArchive::RDONLY` - `ZipArchive::EXCL` - `ZipArchive::CHECKCONS`

## Return Values

Returns `true` on success, `false` or one of the following error codes on error:

- **`ZipArchive::ER_EXISTS`** — File already exists.
- **`ZipArchive::ER_INCONS`** — Zip archive inconsistent.
- **`ZipArchive::ER_INVAL`** — Invalid argument.
- **`ZipArchive::ER_MEMORY`** — Malloc failure.
- **`ZipArchive::ER_NOENT`** — No such file.
- **`ZipArchive::ER_NOZIP`** — Not a zip archive.
- **`ZipArchive::ER_OPEN`** — Can't open file.
- **`ZipArchive::ER_READ`** — Read error.
- **`ZipArchive::ER_SEEK`** — Seek error.

## Examples

**Open and extract**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    echo 'ok';
    $zip->extractTo('test');
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>

     
```

**Create an archive**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->addFile('data.txt', 'entryname.txt');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

**Create an temporary archive**

```php


<?php
$name = tempnam(sys_get_temp_dir(), "FOO");
$zip = new ZipArchive;
$res = $zip->open($name, ZipArchive::OVERWRITE); /* truncate as empty file is not valid */
if ($res === TRUE) {
    $zip->addFile('data.txt', 'entryname.txt');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
