---
id: "en-php-function-phar-setalias"
language: "php"
lang: "en"
category: "function"
name: "Phar::setAlias"
title: "Set the alias for the Phar archive"
signature: "public true Phar::setAlias(string $alias)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.setalias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the alias for the Phar archive

## Description

```php
public true Phar::setAlias(string $alias)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

Set the alias for the Phar archive, and write it as the permanent alias for this phar archive. An alias can be used internally to a phar archive to ensure that use of the `phar` stream wrapper to access internal files always works regardless of the location of the phar archive on the filesystem. Another alternative is to rely upon Phar's interception of `include()` or to use `Phar::interceptFileFuncs()` and use relative paths.

## Parameters

- **`$alias`** — A shorthand string that this archive can be referred to in `phar` stream wrapper access.

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `UnexpectedValueException` when write access is disabled, and `PharException` if the alias is already in use or any problems were encountered flushing changes to disk.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `Phar::setAlias()` now has a tentative return of `true`. |

## Examples

**A `Phar::setAlias()` example**

```php


<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->setAlias('myp.phar');
} catch (Exception $e) {
    // handle error
}
?>

    
```

## See Also

`Phar::__construct()` `Phar::interceptFileFuncs()`
