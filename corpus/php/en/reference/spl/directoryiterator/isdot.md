---
id: "en-php-function-directoryiterator-isdot"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::isDot"
title: "Determine if current DirectoryIterator item is '.' or '..'"
signature: "public bool DirectoryIterator::isDot()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.isdot.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determine if current DirectoryIterator item is '.' or '..'

## Description

```php
public bool DirectoryIterator::isDot()
```

Determines if the current `DirectoryIterator` item is a directory and either `.` or `..`

## Parameters

This function has no parameters.

## Return Values

`true` if the entry is `.` or `..`, otherwise `false`

## Examples

**A `DirectoryIterator::isDot()` example**

This example will list all files, omitting the `.` and `..` entries.

```php


<?php
$iterator = new DirectoryIterator(dirname(__FILE__));
foreach ($iterator as $fileinfo) {
    if (!$fileinfo->isDot()) {
        echo $fileinfo->getFilename() . "\n";
    }
}
?>

    
```

The above example will output something similar to:

```text


apple.jpg
banana.jpg
example.php
pears.jpg

    
```

## See Also

`DirectoryIterator::getType()` `DirectoryIterator::isDir()` `DirectoryIterator::isFile()` `DirectoryIterator::isLink()`
