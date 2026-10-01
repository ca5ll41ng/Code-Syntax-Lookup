---
id: "en-php-function-ziparchive-addfromstring"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::addFromString"
title: "Add a file to a ZIP archive using its contents"
signature: "public bool ZipArchive::addFromString(string $name, string $content, int $flags = ZipArchive::FL_OVERWRITE)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.addfromstring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add a file to a ZIP archive using its contents

## Description

```php
public bool ZipArchive::addFromString(string $name, string $content, int $flags = ZipArchive::FL_OVERWRITE)
```

Add a file to a ZIP archive using its contents.

> For maximum portability, it is recommended to always use forward slashes (`/`) as directory separator in ZIP filenames.

## Parameters

- **`$name`** — The name of the entry to create.
- **`$content`** — The contents to use to create the entry. It is used in a binary safe mode.
- **`$flags`** — Bitmask consisting of `ZipArchive::FL_OVERWRITE`, `ZipArchive::FL_ENC_GUESS`, `ZipArchive::FL_ENC_UTF_8`, `ZipArchive::FL_ENC_CP437`. The behaviour of these constants is described on the ZIP constants page.

## Return Values

Returns `true` on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.0.0, PECL zip 1.18.0 | `$flags` was added. |

## Examples

**Add an entry to a new archive**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

**Add file to a directory inside an archive**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test.zip') === TRUE) {
    $zip->addFromString('dir/test.txt', 'file content goes here');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
