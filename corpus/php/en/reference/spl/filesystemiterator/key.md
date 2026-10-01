---
id: "en-php-function-filesystemiterator-key"
language: "php"
lang: "en"
category: "function"
name: "FilesystemIterator::key"
title: "Retrieve the key for the current file"
signature: "public string FilesystemIterator::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/filesystemiterator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve the key for the current file

## Description

```php
public string FilesystemIterator::key()
```

## Parameters

This function has no parameters.

## Return Values

Returns the pathname or filename depending on the set flags. See the FilesystemIterator constants.

## Examples

**`FilesystemIterator::key()` example**

This example will list the contents of the directory containing the script.

```php


<?php
$iterator = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_FILENAME);
foreach ($iterator as $fileinfo) {
    echo $iterator->key() . "\n";
}
?>

    
```

Output of the above example in PHP 8.2 is similar to:

```text


.
..
apple.jpg
banana.jpg
example.php

    
```

## See Also

FilesystemIterator constants `DirectoryIterator::key()` `DirectoryIterator::getFilename()` `DirectoryIterator::getPathname()`
