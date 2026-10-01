---
id: "en-php-function-ziparchive-statindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::statIndex"
title: "Get the details of an entry defined by its index"
signature: "public array|false ZipArchive::statIndex(int $index, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.statindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the details of an entry defined by its index

## Description

```php
public array|false ZipArchive::statIndex(int $index, int $flags = 0)
```

The function obtains information about the entry defined by its index.

## Parameters

- **`$index`** — Index of the entry
- **`$flags`** — `ZipArchive::FL_UNCHANGED` may be ORed to it to request information about the original file in the archive, ignoring any changes made.

## Return Values

Returns an array containing the entry details or `false` on failure.

## Examples

**Dump the stat info of an entry**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    print_r($zip->statIndex(3));
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>

     
```

The above example will output something similar to:

```text


Array
(
    [name] => foobar/baz
    [index] => 3
    [crc] => 499465816
    [size] => 27
    [mtime] => 1123164748
    [comp_size] => 24
    [comp_method] => 8
)

     
```
