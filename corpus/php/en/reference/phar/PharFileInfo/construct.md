---
id: "en-php-function-pharfileinfo-construct"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::__construct"
title: "Construct a Phar entry object"
signature: "public PharFileInfo::__construct(string $filename)"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a Phar entry object

## Description

```php
public PharFileInfo::__construct(string $filename)
```

This should not be called directly. Instead, a PharFileInfo object is initialized by calling `Phar::offsetGet()` through array access.

## Parameters

- **`$filename`** — The full url to retrieve a file. If you wish to retrieve the information for the file `my/file.php` from the phar `boo.phar`, the entry should be `phar://boo.phar/my/file.php`.

## Errors/Exceptions

Throws `BadMethodCallException` if __construct() is called twice. Throws `UnexpectedValueException` if the phar URL requested is malformed, the requested phar cannot be opened, or the file can't be found within the phar.

## Examples

**A `PharFileInfo::__construct()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['testfile.txt'] = "hi\nthere\ndude";
    $file = $p['testfile.txt'];
    foreach ($file as $line => $text) {
        echo "line number $line: $text";
    }
    // this also works
    $file = new PharFileInfo('phar:///path/to/my.phar/testfile.txt');
    foreach ($file as $line => $text) {
        echo "line number $line: $text";
    }
} catch (Exception $e) {
    echo 'Phar operations failed: ', $e;
}
?>

    
```

The above example will output:

```text


line number 1: hi
line number 2: there
line number 3: dude
line number 1: hi
line number 2: there
line number 3: dude

    
```
