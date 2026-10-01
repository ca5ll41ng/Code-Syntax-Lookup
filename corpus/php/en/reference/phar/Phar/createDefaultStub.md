---
id: "en-php-function-phar-createdefaultstub"
language: "php"
lang: "en"
category: "function"
name: "Phar::createDefaultStub"
title: "Create a phar-file format specific stub"
signature: "final public static string Phar::createDefaultStub(string|null $index = null, string|null $webIndex = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.createdefaultstub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a phar-file format specific stub

## Description

```php
final public static string Phar::createDefaultStub(string|null $index = null, string|null $webIndex = null)
```

This method is intended for creation of phar-file format-specific stubs, and is not intended for use with tar- or zip-based phar archives.

Phar archives contain a bootstrap loader, or `stub` written in PHP that is executed when the archive is executed in PHP either via include:

```php

    
<?php
include 'myphar.phar';
?>
    
   
```

or by simple execution:

```text

    
php myphar.phar
    
   
```

This method provides a simple and easy method to create a stub that will run a startup file from the phar archive. In addition, different files can be specified for running the phar archive from the command line versus through a web server. The loader stub also calls `Phar::interceptFileFuncs()` to allow easy bundling of a PHP application that accesses the file system. If the phar extension is not present, the loader stub will extract the phar archive to a temporary directory and then operate on the files. A shutdown function erases the temporary files on exit.

## Parameters

- **`$index`** — Relative path within the phar archive to run if accessed on the command-line
- **`$webIndex`** — Relative path within the phar archive to run if accessed through a web browser

## Return Values

Returns a string containing the contents of a customized bootstrap loader (stub) that allows the created Phar archive to work with or without the Phar extension enabled.

## Errors/Exceptions

Throws `UnexpectedValueException` if either parameter is longer than 400 bytes.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$index` and `$webIndex` are now nullable. |

## Examples

**A `Phar::createDefaultStub()` example**

```php


<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php'));
} catch (Exception $e) {
    // handle errors
}
?>

    
```

## See Also

`Phar::setStub()` `Phar::getStub()`
