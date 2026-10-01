---
id: "en-php-function-filesystemiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "FilesystemIterator::__construct"
title: "Constructs a new filesystem iterator"
signature: "public FilesystemIterator::__construct(string $directory, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::SKIP_DOTS)"
module: "spl"
source_url: "https://www.php.net/manual/en/filesystemiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new filesystem iterator

## Description

```php
public FilesystemIterator::__construct(string $directory, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::SKIP_DOTS)
```

Constructs a new filesystem iterator from the `$directory`.

## Parameters

- **`$directory`** — The path of the filesystem item to be iterated over.
- **`$flags`** — Flags may be provided which will affect the behavior of some methods. A list of the flags can found under FilesystemIterator predefined constants. They can also be set later with `FilesystemIterator::setFlags()`

## Errors/Exceptions

Throws an `UnexpectedValueException` if the `$directory` does not exist.

Throws a `ValueError` if the `$directory` is an empty string.

## Changelog

|  |  |
| --- | --- |
| 8.2.0 | Prior to PHP 8.2.0, `FilesystemIterator::SKIP_DOTS` was always set and could not be removed. |
| 8.0.0 | Now throws a `ValueError` if `$directory` is an empty string; previously it threw a `RuntimeException`. |

## Examples

**`FilesystemIterator::__construct()` example**

```php


<?php
$it = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::CURRENT_AS_FILEINFO);
foreach ($it as $fileinfo) {
    echo $fileinfo->getFilename() . "\n";
}
?>

    
```

Output of the above example in PHP 8.2 is similar to:

```text


.
..
apples.jpg
banana.jpg
example.php

    
```

Output of the above example prior to PHP 8.2.0 is similar to:

```text


apples.jpg
banana.jpg
example.php

    
```

## See Also

`FilesystemIterator::setFlags()` `DirectoryIterator::__construct()`
