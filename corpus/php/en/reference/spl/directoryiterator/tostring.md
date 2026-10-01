---
id: "en-php-function-directoryiterator-tostring"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::__toString"
title: "Get file name as a string"
signature: "public string DirectoryIterator::__toString()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get file name as a string

## Description

```php
public string DirectoryIterator::__toString()
```

Get the file name of the current `DirectoryIterator` item.

## Parameters

This function has no parameters.

## Return Values

Returns the file name of the current `DirectoryIterator` item.

## Examples

**A `DirectoryIterator::__toString()` example**

This example will list the contents of the directory containing the script.

```php


<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    echo $fileinfo;
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

`DirectoryIterator::getFilename()` The __toString() magic method
