---
id: "en-php-function-ziparchive-setarchivecomment"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setArchiveComment"
title: "Set the comment of a ZIP archive"
signature: "public bool ZipArchive::setArchiveComment(string $comment)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setarchivecomment.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the comment of a ZIP archive

## Description

```php
public bool ZipArchive::setArchiveComment(string $comment)
```

Set the comment of a ZIP archive.

## Parameters

- **`$comment`** — The contents of the comment.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Create an archive and set a comment**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip', ZipArchive::CREATE);
if ($res === TRUE) {
    $zip->addFromString('test.txt', 'file content goes here');
    $zip->setArchiveComment('new archive comment');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
