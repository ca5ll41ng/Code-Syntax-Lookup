---
id: "en-php-function-directoryiterator-seek"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::seek"
title: "Seek to a DirectoryIterator item"
signature: "public void DirectoryIterator::seek(int $offset)"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.seek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seek to a DirectoryIterator item

## Description

```php
public void DirectoryIterator::seek(int $offset)
```

Seek to a given position in the `DirectoryIterator`.

## Parameters

- **`$offset`** — The zero-based numeric position to seek to.

## Return Values

No value is returned.

## Examples

**`DirectoryIterator::seek()` example**

Seek to the fourth item in the directory containing the script. The first two are usually `.` and `..`

```php


<?php
$iterator = new DirectoryIterator(dirname(__FILE__));
$iterator->seek(3);
if ($iterator->valid()) {
    echo $iterator->getFilename();
} else {
    echo 'No file at position 3';
}
?>

    
```

## See Also

`DirectoryIterator::rewind()` `DirectoryIterator::next()` `SeekableIterator::seek()`
