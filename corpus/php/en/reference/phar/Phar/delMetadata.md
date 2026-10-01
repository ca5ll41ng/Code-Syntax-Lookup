---
id: "en-php-function-phar-delmetadata"
language: "php"
lang: "en"
category: "function"
name: "Phar::delMetadata"
title: "Deletes the global metadata of the phar"
signature: "public true Phar::delMetadata()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.delmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Deletes the global metadata of the phar

## Description

```php
public true Phar::delMetadata()
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

Deletes the global metadata of the phar

## Parameters

## Return Values

Always returns `true`.

## Errors/Exceptions

Throws `PharException` if errors occur while flushing changes to disk.

## Examples

**A `Phar::delMetaData()` example**

```php


<?php
try {
    $phar = new Phar('myphar.phar');
    var_dump($phar->getMetadata());
    $phar->setMetadata("hi there");
    var_dump($phar->getMetadata());
    $phar->delMetadata();
    var_dump($phar->getMetadata());
} catch (Exception $e) {
    // handle errors
}
?>

    
```

The above example will output:

```text


NULL
string(8) "hi there"
NULL

    
```

## See Also

`Phar::getMetadata()` `Phar::setMetadata()` `Phar::hasMetadata()`
