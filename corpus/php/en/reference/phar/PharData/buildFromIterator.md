---
id: "en-php-function-phardata-buildfromiterator"
language: "php"
lang: "en"
category: "function"
name: "PharData::buildFromIterator"
title: "Construct a tar or zip archive from an iterator"
signature: "public array PharData::buildFromIterator(Traversable $iterator, string|null $baseDirectory = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.buildfromiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a tar or zip archive from an iterator

## Description

```php
public array PharData::buildFromIterator(Traversable $iterator, string|null $baseDirectory = null)
```

Populate a tar or zip archive from an iterator. Two styles of iterators are supported, iterators that map the filename within the tar/zip to the name of a file on disk, and iterators like DirectoryIterator that return SplFileInfo objects. For iterators that return SplFileInfo objects, the second parameter is required.

## Parameters

- **`$iterator`** — Any iterator that either associatively maps tar/zip file to location or returns SplFileInfo objects
- **`$baseDirectory`** — For iterators that return SplFileInfo objects, the portion of each file's full path to remove when adding to the tar/zip archive

## Return Values

`PharData::buildFromIterator()` returns an associative array mapping internal path of file to the full path of the file on the filesystem.

## Errors/Exceptions

This method returns `UnexpectedValueException` when the iterator returns incorrect values, such as an integer key instead of a string, a `BadMethodCallException` when an SplFileInfo-based iterator is passed without a `$baseDirectory` parameter, or a `PharException` if there were errors saving the phar archive.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | `PharData::buildFromIterator()` no longer returns `false`. |
| 8.0.0 | `$baseDirectory` is now nullable. |

## Examples

**A `PharData::buildFromIterator()` with SplFileInfo**

For most tar/zip archives, the archive will reflect an actual directory layout, and the second style is the most useful. For instance, to create a tar/zip archive containing the files in this sample directory layout:

```text

     
/path/to/project/
                 config/
                        dist.xml
                        debug.xml
                 lib/
                     file1.php
                     file2.php
                 src/
                     processthing.php
                 www/
                     index.php
                 cli/
                     index.php
    
    
```

This code could be used to add these files to the "project.tar" tar archive:

```php

     
<?php
$phar = new PharData('project.tar');
$phar->buildFromIterator(
    new RecursiveIteratorIterator(
     new RecursiveDirectoryIterator('/path/to/project')),
    '/path/to/project');
?>
    
    
```

The file `project.tar` can then be used immediately. `PharData::buildFromIterator()` does not set values such as compression, metadata, and this can be done after creating the tar/zip archive.

As an interesting note, `PharData::buildFromIterator()` can also be used to copy the contents of an existing phar, tar or zip archive, as the PharData object descends from `DirectoryIterator`:

```php

     
<?php
$phar = new PharData('project.tar');
$phar->buildFromIterator(
    new RecursiveIteratorIterator(
     new Phar('/path/to/anotherphar.phar')),
    'phar:///path/to/anotherphar.phar/path/to/project');
$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));
?>
    
    
```

**A `PharData::buildFromIterator()` with other iterators**

The second form of the iterator can be used with any iterator that returns a key => value mapping, such as an `ArrayIterator`:

```php

     
<?php
$phar = new PharData('project.tar');
$phar->buildFromIterator(
    new ArrayIterator(
     array(
        'internal/file.php' => dirname(__FILE__) . '/somefile.php',
        'another/file.jpg' => fopen('/path/to/bigfile.jpg', 'rb'),
     )));
?>
    
    
```

## See Also

`Phar::buildFromIterator()`
