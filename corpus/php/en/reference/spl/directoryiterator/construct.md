---
id: "en-php-function-directoryiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "DirectoryIterator::__construct"
title: "Constructs a new directory iterator from a path"
signature: "public DirectoryIterator::__construct(string $directory)"
module: "spl"
source_url: "https://www.php.net/manual/en/directoryiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new directory iterator from a path

## Description

```php
public DirectoryIterator::__construct(string $directory)
```

Constructs a new directory iterator from a path.

## Parameters

- **`$directory`** — The path of the directory to traverse.

## Errors/Exceptions

Throws an `UnexpectedValueException` if the `$directory` does not exist.

Throws a `ValueError` if the `$directory` is an empty string.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Now throws a `ValueError` if `$directory` is an empty string; previously it threw a `RuntimeException`. |

## Examples

**A `DirectoryIterator::__construct()` example**

This example will list the contents of the directory containing the script.

```php


<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        var_dump($fileinfo->getFilename());
    }
}
?>

    
```

## See Also

`SplFileInfo` `Iterator`
