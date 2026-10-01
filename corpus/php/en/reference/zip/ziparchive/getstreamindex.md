---
id: "en-php-function-ziparchive-getstreamindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getStreamIndex"
title: "Get a file handler to the entry defined by its index (read only)"
signature: "public resource|false ZipArchive::getStreamIndex(int $index, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getstreamindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a file handler to the entry defined by its index (read only)

## Description

```php
public resource|false ZipArchive::getStreamIndex(int $index, int $flags = 0)
```

Get a file handler to the entry defined by its index. For now, it only supports read operations.

## Parameters

- **`$index`** — Index of the entry
- **`$flags`** — If flags is set to `ZipArchive::FL_UNCHANGED`, the original unchanged stream is returned.

## Return Values

Returns a file pointer (resource) on success or `false` on failure.

## Examples

**Get the entry contents with `fread()` and store it**

```php


<?php
$contents = '';
$z = new ZipArchive();
if ($z->open('test.zip')) {
    $fp = $z->getStreamIndex(1, ZipArchive::FL_UNCHANGED);
    if(!$fp) die($z->getStatusString());

    echo stream_get_contents($fp);

    fclose($fp);
}
?>

     
```

## See Also

`ZipArchive::getStreamName()`
