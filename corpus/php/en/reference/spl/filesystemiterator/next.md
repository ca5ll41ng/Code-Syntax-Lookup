---
id: "en-php-function-filesystemiterator-next"
language: "php"
lang: "en"
category: "function"
name: "FilesystemIterator::next"
title: "Move to the next file"
signature: "public void FilesystemIterator::next()"
module: "spl"
source_url: "https://www.php.net/manual/en/filesystemiterator.next.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Move to the next file

## Description

```php
public void FilesystemIterator::next()
```

Move to the next file.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`FilesystemIterator::next()` example**

List the contents of a directory using a while loop.

```php


<?php
$iterator = new FilesystemIterator(dirname(__FILE__));
while($iterator->valid()) {
    echo $iterator->getFilename() . "\n";
    $iterator->next();
}
?>

    
```

The above example will output something similar to:

```text


apple.jpg
banana.jpg
example.php

    
```

## See Also

`DirectoryIterator::next()`
