---
id: "en-php-function-phardata-buildfromdirectory"
language: "php"
lang: "en"
category: "function"
name: "PharData::buildFromDirectory"
title: "Construct a tar/zip archive from the files within a directory"
signature: "public array PharData::buildFromDirectory(string $directory, string $pattern = \"\")"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.buildfromdirectory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a tar/zip archive from the files within a directory

## Description

```php
public array PharData::buildFromDirectory(string $directory, string $pattern = "")
```

Populate a tar/zip archive from directory contents. The optional second parameter is a regular expression (pcre) that is used to exclude files. Any filename that matches the regular expression will be included, all others will be excluded. For more fine-grained control, use `PharData::buildFromIterator()`.

## Parameters

- **`$directory`** — The full or relative path to the directory that contains all files to add to the archive.
- **`$pattern`** — An optional pcre regular expression that is used to filter the list of files. Only file paths matching the regular expression will be included in the archive.

## Return Values

`Phar::buildFromDirectory()` returns an associative array mapping internal path of file to the full path of the file on the filesystem, or `false` on failure.

## Errors/Exceptions

This method throws `BadMethodCallException` when unable to instantiate the internal directory iterators, or a `PharException` if there were errors saving the phar archive.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | `PharData::buildFromDirectory()` no longer returns `false`. |

## Examples

**A `PharData::buildFromDirectory()` example**

```php

    
<?php
$phar = new PharData('project.tar');
// add all files in the project
$phar->buildFromDirectory(dirname(__FILE__) . '/project');

$phar2 = new PharData('project2.zip');
// add all files in the project, only include php files
$phar2->buildFromDirectory(dirname(__FILE__) . '/project', '/\.php$/');
?>
    
   
```

## See Also

`Phar::buildFromDirectory()` `PharData::buildFromIterator()`
