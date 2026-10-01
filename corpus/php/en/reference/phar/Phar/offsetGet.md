---
id: "en-php-function-phar-offsetget"
language: "php"
lang: "en"
category: "function"
name: "Phar::offsetGet"
title: "Gets a `PharFileInfo` object for a specific file"
signature: "public SplFileInfo Phar::offsetGet(string $localName)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.offsetget.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets a `PharFileInfo` object for a specific file

## Description

```php
public SplFileInfo Phar::offsetGet(string $localName)
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets. `Phar::offsetGet()` is used for retrieving files from a Phar archive.

## Parameters

- **`$localName`** — The filename (relative path) to look for in a Phar.

## Return Values

A `PharFileInfo` object is returned that can be used to iterate over a file's contents or to retrieve information about the current file.

## Errors/Exceptions

This method throws `BadMethodCallException` if the file does not exist in the Phar archive.

## Examples

**`Phar::offsetGet()` example**

As with all classes that implement the `ArrayAccess` interface, `Phar::offsetGet()` is automatically called when using the `[]` angle bracket operator.

```php


<?php
$p = new Phar(dirname(__FILE__) . '/myphar.phar', 0, 'myphar.phar');
$p['exists.txt'] = "file exists\n";
try {
    // automatically calls offsetGet()
    echo $p['exists.txt'];
    echo $p['doesnotexist.txt'];
} catch (BadMethodCallException $e) {
    echo $e;
}
?>

    
```

The above example will output:

```text


file exists
Entry doesnotexist.txt does not exist

    
```

## See Also

`Phar::offsetExists()` `Phar::offsetSet()` `Phar::offsetUnset()`
