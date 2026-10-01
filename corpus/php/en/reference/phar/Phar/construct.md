---
id: "en-php-function-phar-construct"
language: "php"
lang: "en"
category: "function"
name: "Phar::__construct"
title: "Construct a Phar archive object"
signature: "public Phar::__construct(string $filename, int $flags = FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS, string|null $alias = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a Phar archive object

## Description

```php
public Phar::__construct(string $filename, int $flags = FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS, string|null $alias = null)
```

## Parameters

- **`$filename`** — Path to an existing Phar archive or to-be-created archive. The file name's extension must contain .phar.
- **`$flags`** — Flags to pass to parent class `RecursiveDirectoryIterator`.
- **`$alias`** — Alias with which this Phar archive should be referred to in calls to stream functionality.

## Errors/Exceptions

Throws `BadMethodCallException` if called twice, `UnexpectedValueException` if the phar archive can't be opened.

## Examples

**A `Phar::__construct()` example**

```php

       
<?php
try {
    $p = new Phar('/path/to/my.phar', FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::KEY_AS_FILENAME,
                  'my.phar');
} catch (UnexpectedValueException $e) {
    die('Could not open my.phar');
} catch (BadMethodCallException $e) {
    echo 'technically, this cannot happen';
}
// this works now
echo file_get_contents('phar://my.phar/example.txt');
// and works as if we had typed
echo file_get_contents('phar:///path/to/my.phar/example.txt');
?>
      
     
```
