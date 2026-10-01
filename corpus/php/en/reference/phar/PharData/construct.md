---
id: "en-php-function-phardata-construct"
language: "php"
lang: "en"
category: "function"
name: "PharData::__construct"
title: "Construct a non-executable tar or zip archive object"
signature: "public PharData::__construct(string $filename, int $flags = FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS, string|null $alias = null, int $format = 0)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a non-executable tar or zip archive object

## Description

```php
public PharData::__construct(string $filename, int $flags = FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS, string|null $alias = null, int $format = 0)
```

## Parameters

- **`$filename`** — Path to an existing tar/zip archive or to-be-created archive
- **`$flags`** — Flags to pass to `Phar` parent class `RecursiveDirectoryIterator`.
- **`$alias`** — Alias with which this Phar archive should be referred to in calls to stream functionality.
- **`$format`** — One of the file format constants available within the `Phar` class.

## Errors/Exceptions

Throws `BadMethodCallException` if called twice; `UnexpectedValueException` if the Phar archive can't be opened.

## Examples

**A `PharData::__construct()` example**

```php

       
<?php
try {
    $p = new PharData('/path/to/my.tar', Phar::CURRENT_AS_FILEINFO | Phar::KEY_AS_FILENAME);
} catch (UnexpectedValueException $e) {
    die('Could not open my.tar');
} catch (BadMethodCallException $e) {
    echo 'technically, this cannot happen';
}
echo file_get_contents('phar:///path/to/my.tar/example.txt');
?>
      
     
```
