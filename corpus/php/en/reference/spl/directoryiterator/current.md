---
id: "en-php-function-directoryiterator-current"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::current"
title: "Return the current DirectoryIterator item"
signature: "public mixed DirectoryIterator::current()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the current DirectoryIterator item

## Description

```php
public mixed DirectoryIterator::current()
```

Get the current `DirectoryIterator` item.

## Parameters

This function has no parameters.

## Return Values

The current `DirectoryIterator` item.

## Examples

**A `DirectoryIterator::current()` example**

This example will list the contents of the directory containing the script.

```php


<?php
$iterator = new DirectoryIterator(__DIR__);
while($iterator->valid()) {
    $file = $iterator->current();
    echo $iterator->key() . " => " . $file->getFilename() . "\n";
    $iterator->next();
}
?>

    
```

The above example will output something similar to:

```text


0 => .
1 => ..
2 => apple.jpg
3 => banana.jpg
4 => index.php
5 => pear.jpg

    
```

## See Also

`DirectoryIterator::key()` `DirectoryIterator::next()` `DirectoryIterator::rewind()` `DirectoryIterator::valid()` `Iterator::current()`
