---
id: "en-php-function-ziparchive-setcommentname"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::setCommentName"
title: "Set the comment of an entry defined by its name"
signature: "public bool ZipArchive::setCommentName(string $name, string $comment)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.setcommentname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the comment of an entry defined by its name

## Description

```php
public bool ZipArchive::setCommentName(string $name, string $comment)
```

Set the comment of an entry defined by its name.

## Parameters

- **`$name`** — Name of the entry.
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
    $zip->setCommentName('entry1.txt', 'new entry comment');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
