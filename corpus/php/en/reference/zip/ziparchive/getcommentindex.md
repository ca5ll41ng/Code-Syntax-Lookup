---
id: "en-php-function-ziparchive-getcommentindex"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::getCommentIndex"
title: "Returns the comment of an entry using the entry index"
signature: "public string|false ZipArchive::getCommentIndex(int $index, int $flags = 0)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.getcommentindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the comment of an entry using the entry index

## Description

```php
public string|false ZipArchive::getCommentIndex(int $index, int $flags = 0)
```

Returns the comment of an entry using the entry index.

## Parameters

- **`$index`** — Index of the entry
- **`$flags`** — If flags is set to `ZipArchive::FL_UNCHANGED`, the original unchanged comment is returned.

## Return Values

Returns the comment on success or `false` on failure.

## Examples

**Dump an entry comment**

```php


<?php
$zip = new ZipArchive;
$res = $zip->open('test1.zip');
if ($res === TRUE) {
    var_dump($zip->getCommentIndex(1));
} else {
    echo 'failed, code:' . $res;
}
?>

     
```
