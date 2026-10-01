---
id: "en-php-function-ziparchive-deletename"
language: "php"
lang: "en"
category: "function"
name: "ZipArchive::deleteName"
title: "Delete an entry in the archive using its name"
signature: "public bool ZipArchive::deleteName(string $name)"
module: "zip"
source_url: "https://www.php.net/manual/en/ziparchive.deletename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete an entry in the archive using its name

## Description

```php
public bool ZipArchive::deleteName(string $name)
```

Delete an entry in the archive using its name.

## Parameters

- **`$name`** — Name of the entry to delete.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**Deleting a file and directory from an archive, using names**

```php


<?php
$zip = new ZipArchive;
if ($zip->open('test1.zip') === TRUE) {
    $zip->deleteName('testfromfile.php');
    $zip->deleteName('testDir/');
    $zip->close();
    echo 'ok';
} else {
    echo 'failed';
}
?>

     
```
