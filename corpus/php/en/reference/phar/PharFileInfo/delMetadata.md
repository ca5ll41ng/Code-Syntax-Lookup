---
id: "en-php-function-pharfileinfo-delmetadata"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::delMetadata"
title: "Deletes the metadata of the entry"
signature: "public true PharFileInfo::delMetadata()"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.delmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes the metadata of the entry

## Description

```php
public true PharFileInfo::delMetadata()
```

Deletes the metadata of the entry, if any.

## Parameters

No parameters.

## Return Values

Always returns `true`. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a `Phar` archive. Files within `PharData` archives do not have this restriction.

## Errors/Exceptions

Throws `PharException` if errors occurred while flushing changes to disk, and `BadMethodCallException` if write access is disabled.

## Examples

**A `PharFileInfo::delMetaData()` example**

```php


<?php
try {
    $a = new Phar('myphar.phar');
    $a['hi'] = 'hi';
    var_dump($a['hi']->delMetadata());
    $a['hi']->setMetadata('there');
    var_dump($a['hi']->delMetadata());
    var_dump($a['hi']->delMetadata());
} catch (Exception $e) {
    // handle errors
}
?>

    
```

The above example will output:

```text


bool(false)
bool(true)
bool(false)

    
```

## See Also

`PharFileInfo::setMetadata()` `PharFileInfo::hasMetadata()` `PharFileInfo::getMetadata()` `Phar::setMetadata()` `Phar::hasMetadata()` `Phar::getMetadata()`
