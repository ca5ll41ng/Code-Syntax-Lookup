---
id: "en-php-function-directoryiterator-next"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::next"
title: "Move forward to next DirectoryIterator item"
signature: "public void DirectoryIterator::next()"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move forward to next DirectoryIterator item

## Description

```php
public void DirectoryIterator::next()
```

Move forward to the next `DirectoryIterator` item.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`DirectoryIterator::next()` example**

List the contents of a directory using a while loop.

```php


<?php
$iterator = new DirectoryIterator(dirname(__FILE__));
while($iterator->valid()) {
    echo $iterator->getFilename() . "\n";
    $iterator->next();
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

`DirectoryIterator::current()` `DirectoryIterator::key()` `DirectoryIterator::rewind()` `DirectoryIterator::valid()` `Iterator::next()`
