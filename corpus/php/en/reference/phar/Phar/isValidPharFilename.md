---
id: "en-php-function-phar-isvalidpharfilename"
language: "php"
lang: "en"
category: "function"
name: "Phar::isValidPharFilename"
title: "Returns whether the given filename is a valid phar filename"
signature: "final public static bool Phar::isValidPharFilename(string $filename, bool $executable = true)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.isvalidpharfilename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the given filename is a valid phar filename

## Description

```php
final public static bool Phar::isValidPharFilename(string $filename, bool $executable = true)
```

Returns whether the given filename is a valid phar filename that will be recognized as a phar archive by the phar extension. This can be used to test a name without having to instantiate a phar archive and catch the inevitable Exception that will be thrown if an invalid name is specified.

## Parameters

- **`$filename`** — The name or full path to a phar archive not yet created
- **`$executable`** — This parameter determines whether the filename should be treated as a phar executable archive, or a data non-executable archive

## Return Values

Returns `true` if the filename is valid, `false` if not.
