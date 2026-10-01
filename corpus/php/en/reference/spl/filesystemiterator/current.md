---
id: "en-php-function-filesystemiterator-current"
language: "php"
lang: "en"
category: "function"
name: "FilesystemIterator::current"
title: "The current file"
signature: "public string|SplFileInfo|FilesystemIterator FilesystemIterator::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/filesystemiterator.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The current file

## Description

```php
public string|SplFileInfo|FilesystemIterator FilesystemIterator::current()
```

Get file information of the current element.

## Parameters

This function has no parameters.

## Return Values

The filename, file information, or $this depending on the set flags. See the FilesystemIterator constants.

## Examples

**`FilesystemIterator::current()` example**

This example will list the contents of the directory containing the script.

```php


<?php
$iterator = new FilesystemIterator(__DIR__, FilesystemIterator::CURRENT_AS_PATHNAME);
foreach ($iterator as $fileinfo) {
    echo $iterator->current() . "\n";
}
?>

    
```

Output of the above example in PHP 8.2 is similar to:

```text


/www/examples/.
/www/examples/..
/www/examples/apple.jpg
/www/examples/banana.jpg
/www/examples/example.php

    
```

## See Also

FilesystemIterator constants `DirectoryIterator::current()` `DirectoryIterator::getFileName()`
