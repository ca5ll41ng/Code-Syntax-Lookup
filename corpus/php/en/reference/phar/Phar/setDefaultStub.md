---
id: "en-php-function-phar-setdefaultstub"
language: "php"
lang: "en"
category: "function"
name: "Phar::setDefaultStub"
title: "Used to set the PHP loader or bootstrap stub of a Phar archive to the default loader"
signature: "public true Phar::setDefaultStub(string|null $index = null, string|null $webIndex = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.setdefaultstub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to set the PHP loader or bootstrap stub of a Phar archive to the default loader

## Description

```php
public true Phar::setDefaultStub(string|null $index = null, string|null $webIndex = null)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

This method is a convenience method that combines the functionality of `Phar::createDefaultStub()` and `Phar::setStub()`.

## Parameters

- **`$index`** — Relative path within the phar archive to run if accessed on the command-line
- **`$webIndex`** — Relative path within the phar archive to run if accessed through a web browser

## Return Values

Always returns `true`.

## Errors/Exceptions

`UnexpectedValueException` is thrown if phar.readonly is enabled in php.ini. `PharException` is thrown if any problems are encountered flushing changes to disk.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `Phar::setDefaultStub()` now has a tentative return of `true`. |
| 8.0.0 | `$webIndex` is nullable now. |

## Examples

**A `Phar::setDefaultStub()` example**

```php


<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->setDefaultStub('cli.php', 'web/index.php');
    // this is the same as:
    // $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php'));
} catch (Exception $e) {
    // handle errors
}
?>

    
```

## See Also

`Phar::setStub()` `Phar::createDefaultStub()`
