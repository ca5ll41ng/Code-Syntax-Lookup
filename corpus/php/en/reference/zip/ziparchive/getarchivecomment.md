---
id: "en-php-function-ziparchive-getarchivecomment"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getArchiveComment"
title: "Returns the Zip archive comment"
signature: "public string|false ZipArchive::getArchiveComment(int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getarchivecomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Zip archive comment

## Description

```php
public string|false ZipArchive::getArchiveComment(int $flags = 0)
```

Returns the Zip archive comment.

## Parameters

- **`$flags`** — If flags is set to `ZipArchive::FL_UNCHANGED`, the original unchanged comment is returned.

## Return Values

Returns the Zip archive comment or `false` on failure.

## Examples

**Dump an archive comment**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test_with_comment.zip');
if ($res === TRUE) {
    var_dump($zip->getArchiveComment());
    /* Or using the archive property */
    var_dump($zip->comment);
} else {
    echo 'failed, code:' . $res;
}
?>

   
```
