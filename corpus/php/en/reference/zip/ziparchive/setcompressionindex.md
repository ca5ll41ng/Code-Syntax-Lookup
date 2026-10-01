---
id: "en-php-function-ziparchive-setcompressionindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setCompressionIndex"
title: "Set the compression method of an entry defined by its index"
signature: "public bool ZipArchive::setCompressionIndex(int $index, int $method, int $compflags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setcompressionindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the compression method of an entry defined by its index

## Description

```php
public bool ZipArchive::setCompressionIndex(int $index, int $method, int $compflags = 0)
```

Set the compression method of an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry.
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
    $zip->setCompressionIndex(0, ZipArchive::CM_STORE);
    $zip->setCompressionIndex(1, ZipArchive::CM_DEFLATE);
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
