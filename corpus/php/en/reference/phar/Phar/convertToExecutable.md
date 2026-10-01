---
id: "en-php-function-phar-converttoexecutable"
language: "php"
lang: "en"
category: "function"
name: "Phar::convertToExecutable"
title: "Convert a phar archive to another executable phar archive file format"
signature: "public Phar|null Phar::convertToExecutable(int|null $format = null, int|null $compression = null, string|null $extension = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.converttoexecutable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert a phar archive to another executable phar archive file format

## Description

```php
public Phar|null Phar::convertToExecutable(int|null $format = null, int|null $compression = null, string|null $extension = null)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

This method is used to convert a phar archive to another file format. For instance, it can be used to create a tar-based executable phar archive from a zip-based executable phar archive, or from an executable phar archive in the phar file format. In addition, it can be used to apply whole-archive compression to a tar or phar-based archive.

If no changes are specified, this method throws a `BadMethodCallException`.

If successful, the method creates a new archive on disk and returns a `Phar` object. The old archive is not removed from disk, and should be done manually after the process has finished.

## Parameters

- **`$format`** — This should be one of `Phar::PHAR`, `Phar::TAR`, or `Phar::ZIP`. If set to `null`, the existing file format will be preserved.
- **`$compression`** — This should be one of `Phar::NONE` for no whole-archive compression, `Phar::GZ` for zlib-based compression, and `Phar::BZ2` for bzip-based compression.
- **`$extension`** — This parameter is used to override the default file extension for a converted archive. Note that all zip- and tar-based phar archives must contain `.phar` in their file extension in order to be processed as a phar archive. — If converting to a phar-based archive, the default extensions are `.phar`, `.phar.gz`, or `.phar.bz2` depending on the specified compression. For tar-based phar archives, the default extensions are `.phar.tar`, `.phar.tar.gz`, and `.phar.tar.bz2`. For zip-based phar archives, the default extension is `.phar.zip`.

## Return Values

The method returns a `Phar` object on success, or `null` on failure.

## Errors/Exceptions

This method throws `BadMethodCallException` when unable to compress, an unknown compression method has been specified, the requested archive is buffering with `Phar::startBuffering()` and has not concluded with `Phar::stopBuffering()`, an `UnexpectedValueException` if write support is disabled, and a `PharException` if any problems are encountered during the phar creation process.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$format`, `$compression`, and `$extension` are now nullable. |

## Examples

**A `Phar::convertToExecutable()` example**

Using Phar::convertToExecutable():

```php


<?php
try {
    $tarphar = new Phar('myphar.phar.tar');
    // convert it to the phar file format
    // note that myphar.phar.tar is *not* unlinked
    $phar = $tarphar->convertToExecutable(Phar::PHAR); // creates myphar.phar
    $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php'));
    // creates myphar.phar.tgz
    $compressed = $phar->convertToExecutable(Phar::TAR, Phar::GZ, '.phar.tgz');
} catch (Exception $e) {
    // handle the error here
}
?>

    
```

## See Also

`Phar::convertToData()` `PharData::convertToExecutable()` `PharData::convertToData()`
