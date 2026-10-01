---
id: "en-php-function-phar-offsetset"
language: "php"
lang: "en"
category: "function"
name: "Phar::offsetSet"
title: "Set the contents of an internal file to those of an external file"
signature: "public void Phar::offsetSet(string $localName, resource|string $value)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the contents of an internal file to those of an external file

## Description

```php
public void Phar::offsetSet(string $localName, resource|string $value)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets. offsetSet is used for modifying an existing file, or adding a new file to a Phar archive.

## Parameters

- **`$localName`** — The filename (relative path) to modify in a Phar.
- **`$value`** — Content of the file.

## Return Values

No return values.

## Errors/Exceptions

if phar.readonly is `1`, `BadMethodCallException` is thrown, as modifying a Phar is only allowed when phar.readonly is set to `0`. Throws `PharException` if there are any problems flushing changes made to the Phar archive to disk.

## Examples

**A `Phar::offsetSet()` example**

offsetSet should not be accessed directly, but instead used via array access with the `[]` operator.

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
try {
    // calls offsetSet
    $p['file.txt'] = 'Hi there';
} catch (Exception $e) {
    echo 'Could not modify file.txt:', $e;
}
?>

    
```

## Notes

> `Phar::addFile()`, `Phar::addFromString()` and `Phar::offsetSet()` save a new phar archive each time they are called. If performance is a concern, `Phar::buildFromDirectory()` or `Phar::buildFromIterator()` should be used instead.

## See Also

`Phar::offsetExists()` `Phar::offsetGet()` `Phar::offsetUnset()`
