---
id: "en-php-function-phar-buildfromdirectory"
language: "php"
lang: "en"
category: "function"
name: "Phar::buildFromDirectory"
title: "Construct a phar archive from the files within a directory"
signature: "public array Phar::buildFromDirectory(string $directory, string $pattern = \"\")"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.buildfromdirectory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a phar archive from the files within a directory

## Description

```php
public array Phar::buildFromDirectory(string $directory, string $pattern = "")
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

Populate a phar archive from directory contents. The optional second parameter is a regular expression (pcre) that is used to exclude files. Any filename that matches the regular expression will be included, all others will be excluded. For more fine-grained control, use `Phar::buildFromIterator()`.

## Parameters

- **`$directory`** — The full or relative path to the directory that contains all files to add to the archive.
- **`$pattern`** — An optional pcre regular expression that is used to filter the list of files. Only file paths matching the regular expression will be included in the archive.

## Return Values

`Phar::buildFromDirectory()` returns an associative array mapping internal path of file to the full path of the file on the filesystem.

## Errors/Exceptions

This method throws `BadMethodCallException` when unable to instantiate the internal directory iterators, or a `PharException` if there were errors saving the phar archive.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | `Phar::buildFromDirectory()` no longer returns `false`. |

## Examples

**A `Phar::buildFromDirectory()` example**

```php

    
<?php
// create with alias "project.phar"
$phar = new Phar('project.phar', 0, 'project.phar');
// add all files in the project
$phar->buildFromDirectory(dirname(__FILE__) . '/project');
$phar->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));

$phar2 = new Phar('project2.phar', 0, 'project2.phar');
// add all files in the project, only include php files
$phar2->buildFromDirectory(dirname(__FILE__) . '/project', '/\.php$/');
$phar2->setStub($phar->createDefaultStub('cli/index.php', 'www/index.php'));
?>
    
   
```

## See Also

`Phar::buildFromIterator()`
