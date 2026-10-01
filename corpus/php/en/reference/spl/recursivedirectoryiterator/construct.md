---
id: "en-php-function-recursivedirectoryiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "RecursiveDirectoryIterator::__construct"
title: "Constructs a RecursiveDirectoryIterator"
signature: "public RecursiveDirectoryIterator::__construct(string $directory, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO)"
module: "spl"
source_url: "https://www.php.net/manual/en/recursivedirectoryiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a RecursiveDirectoryIterator

## Description

```php
public RecursiveDirectoryIterator::__construct(string $directory, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO)
```

Constructs a `RecursiveDirectoryIterator()` for the provided `$directory`.

## Parameters

- **`$directory`** — The path of the directory to be iterated over.
- **`$flags`** — Flags may be provided which will affect the behavior of some methods. A list of the flags can found under FilesystemIterator predefined constants. They can also be set later with `FilesystemIterator::setFlags()`.

## Errors/Exceptions

Throws an `UnexpectedValueException` if the `$directory` does not exist.

Throws a `ValueError` if the `$directory` is an empty string.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Now throws a `ValueError` if `$directory` is an empty string; previously it threw a `RuntimeException`. |

## Examples

**`RecursiveDirectoryIterator` example**

```php


<?php

$directory = '/tmp';

$it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($directory));

$it->rewind();
while($it->valid()) {

    if (!$it->isDot()) {
        echo 'SubPathName: ' . $it->getSubPathName() . "\n";
        echo 'SubPath:     ' . $it->getSubPath() . "\n";
        echo 'Key:         ' . $it->key() . "\n\n";
    }

    $it->next();
}

?>

    
```

The above example will output something similar to:

```text


SubPathName: fruit/apple.xml
SubPath:     fruit
Key:         /tmp/fruit/apple.xml

SubPathName: stuff.xml
SubPath:     
Key:         /tmp/stuff.xml

SubPathName: veggies/carrot.xml
SubPath:     veggies
Key:         /tmp/veggies/carrot.xml


    
```

## See Also

`FilesystemIterator::__construct()` `RecursiveIteratorIterator::__construct()` FilesystemIterator predefined constants
