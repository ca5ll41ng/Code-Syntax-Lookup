---
id: "en-php-function-filesystemiterator-setflags"
language: "php"
lang: "en"
category: "function"
name: "FilesystemIterator::setFlags"
title: "Sets handling flags"
signature: "public void FilesystemIterator::setFlags(int $flags)"
module: "spl"
source_url: "https://www.php.net/manual/en/filesystemiterator.setflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets handling flags

## Description

```php
public void FilesystemIterator::setFlags(int $flags)
```

Sets handling flags.

## Parameters

- **`$flags`** — The handling flags to set. See the FilesystemIterator constants.

## Return Values

No value is returned.

## Examples

**`FilesystemIterator::key()` example**

This example demonstrates the difference between the FilesystemIterator::KEY_AS_PATHNAME and FilesystemIterator::KEY_AS_FILENAME flags.

```php


<?php
$iterator = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_PATHNAME);
echo "Key as Pathname:\n";
foreach ($iterator as $key => $fileinfo) {
    echo $key . "\n";
}

$iterator->setFlags(FilesystemIterator::KEY_AS_FILENAME);
echo "\nKey as Filename:\n";
foreach ($iterator as $key => $fileinfo) {
    echo $key . "\n";
}
?>

    
```

Output of the above example in PHP 8.2 is similar to:

```text


Key as Pathname:
/www/examples/.
/www/examples/..
/www/examples/apple.jpg
/www/examples/banana.jpg
/www/examples/example.php

Key as Filename:
.
..
apple.jpg
banana.jpg
example.php

    
```

## See Also

`FilesystemIterator::__construct()` `FilesystemIterator::getFlags()`
