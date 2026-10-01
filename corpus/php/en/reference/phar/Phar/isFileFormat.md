---
id: "en-php-function-phar-isfileformat"
language: "php"
lang: "en"
category: "function"
name: "Phar::isFileFormat"
title: "Returns true if the phar archive is based on the tar/phar/zip file format depending on the parameter"
signature: "public bool Phar::isFileFormat(int $format)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.isfileformat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns true if the phar archive is based on the tar/phar/zip file format depending on the parameter

## Description

```php
public bool Phar::isFileFormat(int $format)
```

## Parameters

- **`$format`** — Either `Phar::PHAR`, `Phar::TAR`, or `Phar::ZIP` to test for the format of the archive.

## Return Values

Returns `true` if the phar archive matches the file format requested by the parameter

## Errors/Exceptions

`PharException` is thrown if the parameter is an unknown file format specifier.

## See Also

`Phar::convertToExecutable()` `Phar::convertToData()`
