---
id: "en-php-function-filesystemiterator-rewind"
language: "php"
lang: "en"
category: "function"
name: "FilesystemIterator::rewind"
title: "Rewinds back to the beginning"
signature: "public void FilesystemIterator::rewind()"
module: "spl"
source_url: "https://www.php.net/manual/en/filesystemiterator.rewind.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rewinds back to the beginning

## Description

```php
public void FilesystemIterator::rewind()
```

Rewinds the directory back to the start.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**`FilesystemIterator::rewind()` example**

```php


<?php
$iterator = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_FILENAME);

echo $iterator->key() . "\n";

$iterator->next();
echo $iterator->key() . "\n";

$iterator->rewind();
echo $iterator->key() . "\n";
?>

    
```

The above example will output something similar to:

```text


apple.jpg
banana.jpg
apple.jpg

    
```

## See Also

`DirectoryIterator::rewind()`
