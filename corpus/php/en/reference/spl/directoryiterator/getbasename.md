---
id: "en-php-function-directoryiterator-getbasename"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::getBasename"
title: "Get base name of current DirectoryIterator item"
signature: "public string DirectoryIterator::getBasename(string $suffix = \"\")"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.getbasename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get base name of current DirectoryIterator item

## Description

```php
public string DirectoryIterator::getBasename(string $suffix = "")
```

Get the base name of the current `DirectoryIterator` item.

## Parameters

- **`$suffix`** — If the base name ends in `$suffix`, this will be cut.

## Return Values

The base name of the current `DirectoryIterator` item.

## Examples

**A `DirectoryIterator::getBasename()` example**

This example will list the full base name and the base name with suffix `.jpg` removed for the files in the directory containing the script.

```php


<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    if ($fileinfo->isFile()) {
        echo $fileinfo->getBasename() . "\n";
        echo $fileinfo->getBasename('.jpg') . "\n";
    }
}
?>

    
```

The above example will output something similar to:

```text


apple.jpg
apple
banana.jpg
banana
index.php
index.php
pear.jpg
pear

    
```

## See Also

`DirectoryIterator::getFilename()` `DirectoryIterator::getPath()` `DirectoryIterator::getPathname()` `basename()` `pathinfo()`
