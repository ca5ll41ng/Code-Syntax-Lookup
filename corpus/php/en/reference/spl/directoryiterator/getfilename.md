---
id: "en-php-function-directoryiterator-getfilename"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::getFilename"
title: "Return file name of current DirectoryIterator item"
signature: "public string DirectoryIterator::getFilename()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.getfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return file name of current DirectoryIterator item

## Description

```php
public string DirectoryIterator::getFilename()
```

Get the file name of the current `DirectoryIterator` item.

## Parameters

This function has no parameters.

## Return Values

Returns the file name of the current `DirectoryIterator` item.

## Examples

**A `DirectoryIterator::getFilename()` example**

This example will list the contents of the directory containing the script.

```php


<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    echo $fileinfo->getFilename() . "\n";
}
?>

    
```

The above example will output something similar to:

```text


.
..
apple.jpg
banana.jpg
index.php
pear.jpg

    
```

## See Also

`DirectoryIterator::getBasename()` `DirectoryIterator::getPath()` `DirectoryIterator::getPathname()` `pathinfo()`
