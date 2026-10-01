---
id: "en-php-function-pharfileinfo-getpharflags"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::getPharFlags"
title: "Returns the Phar file entry flags"
signature: "public int PharFileInfo::getPharFlags()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.getpharflags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Phar file entry flags

## Description

```php
public int PharFileInfo::getPharFlags()
```

This returns the flags set in the manifest for a Phar. This will always return `0` in the current implementation.

## Parameters

This function has no parameters.

## Return Values

The Phar flags (always `0` in the current implementation)

## Examples

**A `PharFileInfo::getPharFlags()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    var_dump($file->getPharFlags());
} catch (Exception $e) {
    echo 'Could not create/modify my.phar: ', $e;
}
?>

    
```

The above example will output:

```text


int(0)

    
```
