---
id: "en-php-function-directoryiterator-key"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::key"
title: "Return the key for the current DirectoryIterator item"
signature: "public mixed DirectoryIterator::key()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the key for the current DirectoryIterator item

## Description

```php
public mixed DirectoryIterator::key()
```

Get the key for the current `DirectoryIterator` item.

## Parameters

This function has no parameters.

## Return Values

The key for the current `DirectoryIterator` item as an `integer`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | When the iterator is uninitialized, an `Error` is thrown now. Previously, the method returned `false`. |

## Examples

**A `DirectoryIterator::key()` example**

```php


<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        echo $fileinfo->key() . " => " . $fileinfo->getFilename() . "\n";
    }
}
?>

    
```

The above example will output something similar to:

```text


0 => apple.jpg
1 => banana.jpg
2 => index.php
3 => pear.jpg

    
```

## See Also

`DirectoryIterator::current()` `DirectoryIterator::next()` `DirectoryIterator::rewind()` `DirectoryIterator::valid()` `Iterator::key()`
