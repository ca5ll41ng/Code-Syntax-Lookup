---
id: "en-php-function-pharfileinfo-getmetadata"
language: "php"
lang: "en"
category: "function"
name: "PharFileInfo::getMetadata"
title: "Returns file-specific meta-data saved with a file"
signature: "public mixed PharFileInfo::getMetadata(array $unserializeOptions = [])"
module: "phar"
source_url: "https://www.php.net/manual/en/pharfileinfo.getmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns file-specific meta-data saved with a file

## Description

```php
public mixed PharFileInfo::getMetadata(array $unserializeOptions = [])
```

Return meta-data that was saved in the Phar archive's manifest for this file.

## Parameters

## Return Values

any PHP variable that can be serialized and is stored as meta-data for the file, or `null` if no meta-data is stored.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | The parameter `$unserializeOptions` has been added. |

## Examples

**A `PharFileInfo::getMetadata()` example**

```php


<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.txt'] = 'hello';
    $p['file.txt']->setMetadata(array('user' => 'bill', 'mime-type' => 'text/plain'));
    var_dump($p['file.txt']->getMetadata());
} catch (Exception $e) {
    echo 'Could not create/modify brandnewphar.phar: ', $e;
}
?>

    
```

The above example will output:

```text


array(2) {
  ["user"]=>
  string(4) "bill"
  ["mime-type"]=>
  string(10) "text/plain"
}

    
```

## See Also

`PharFileInfo::setMetadata()` `PharFileInfo::hasMetadata()` `PharFileInfo::delMetadata()` `Phar::setMetadata()` `Phar::hasMetadata()` `Phar::getMetadata()`
