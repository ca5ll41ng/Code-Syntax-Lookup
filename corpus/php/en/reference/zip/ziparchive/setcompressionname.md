---
id: "en-php-function-ziparchive-setcompressionname"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setCompressionName"
title: "Set the compression method of an entry defined by its name"
signature: "public bool ZipArchive::setCompressionName(string $name, int $method, int $compflags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setcompressionname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the compression method of an entry defined by its name

## Description

```php
public bool ZipArchive::setCompressionName(string $name, int $method, int $compflags = 0)
```

Set the compression method of an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry.
- **`$method`** — The compression method, one of the `ZipArchive::CM_{*}` constants.
- **`$compflags`** — Compression level.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Add files with different compression methods to an archive**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('foo', 'Some text');
    $zip->addFromString('bar', 'Some other text');
    $zip->setCompressionName('foo', ZipArchive::CM_STORE);
    $zip->setCompressionName('bar', ZipArchive::CM_DEFLATE);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```

**Add file and set compression method**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFile('foo.jpg', 'bar.jpg');
    $zip->setCompressionName('bar.jpg', ZipArchive::CM_XZ);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
