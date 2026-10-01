---
id: "en-php-function-phar-offsetunset"
language: "php"
lang: "en"
category: "function"
name: "Phar::offsetUnset"
title: "Remove a file from a phar"
signature: "public void Phar::offsetUnset(string $localName)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.offsetunset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove a file from a phar

## Description

```php
public void Phar::offsetUnset(string $localName)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets. offsetUnset is used for deleting an existing file, and is called by the `unset()` language construct.

## Parameters

- **`$localName`** — The filename (relative path) to modify in a Phar.

## Return Values

No value is returned.

## Errors/Exceptions

if phar.readonly is `1`, `BadMethodCallException` is thrown, as modifying a Phar is only allowed when phar.readonly is set to `0`. Throws `PharException` if there are any problems flushing changes made to the Phar archive to disk.

## Examples

**A `Phar::offsetUnset()` example**

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
try {
    // deletes file.txt from my.phar by calling offsetUnset
    unset($p['file.txt']);
} catch (Exception $e) {
    echo 'Could not delete file.txt: ', $e;
}
?>

    
```

## See Also

`Phar::offsetExists()` `Phar::offsetGet()` `Phar::offsetSet()` `Phar::unlinkArchive()` `Phar::delete()`
