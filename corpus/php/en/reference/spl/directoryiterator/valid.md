---
id: "en-php-function-directoryiterator-valid"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::valid"
title: "Check whether current DirectoryIterator position is a valid file"
signature: "public bool DirectoryIterator::valid()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.valid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check whether current DirectoryIterator position is a valid file

## Description

```php
public bool DirectoryIterator::valid()
```

Check whether current `DirectoryIterator` position is a valid file.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the position is valid, otherwise `false`

## Examples

**A `DirectoryIterator::valid()` example**

```php


<?php
$iterator = new DirectoryIterator(dirname(__FILE__));

// Loop to end of iterator
while($iterator->valid()) {
    $iterator->next();
}

$iterator->valid(); // FALSE
$iterator->rewind(); 
$iterator->valid(); // TRUE

?>

    
```

## See Also

`DirectoryIterator::current()` `DirectoryIterator::key()` `DirectoryIterator::next()` `DirectoryIterator::rewind()` `Iterator::valid()`
