---
id: "en-php-function-ziparchive-setcommentindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setCommentIndex"
title: "Set the comment of an entry defined by its index"
signature: "public bool ZipArchive::setCommentIndex(int $index, string $comment)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setcommentindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the comment of an entry defined by its index

## Description

```php
public bool ZipArchive::setCommentIndex(int $index, string $comment)
```

Set the comment of an entry defined by its index.

## Parameters

- **`$index`** — Index of the entry.
- **`$comment`** — The contents of the comment.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Open an archive and set a comment for an entry**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    $zip->setCommentIndex(2, 'new entry comment');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
