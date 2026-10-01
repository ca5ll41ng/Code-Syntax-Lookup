---
id: "en-php-function-pharfileinfo-iscrcchecked"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::isCRCChecked"
title: "Returns whether file entry has had its CRC verified"
signature: "public bool PharFileInfo::isCRCChecked()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.iscrcchecked.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether file entry has had its CRC verified

## Description

```php
public bool PharFileInfo::isCRCChecked()
```

This returns whether a file within a Phar archive has had its CRC verified.

## Parameters

This function has no parameters.

## Return Values

`true` if the file has had its CRC verified, `false` if not.

## Examples

**A `PharFileInfo::isCRCChecked()` example**

```php


<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    var_dump($file->isCRCChecked());
} catch (Exception $e) {
    echo 'Create/modify operations failed on my.phar: ', $e;
}
?>

    
```

The above example will output:

```text


bool(true)

    
```
