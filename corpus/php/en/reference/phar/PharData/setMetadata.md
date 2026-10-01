---
id: "en-php-function-phardata-setmetadata"
language: "php"
lang: "en"
category: "function"
name: "PharData::setMetadata"
title: "Sets phar archive meta-data"
signature: "public void PharData::setMetadata(mixed $metadata)"
module: "phar"
source_url: "https://www.php.net/manual/en/phardata.setmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets phar archive meta-data

## Description

```php
public void PharData::setMetadata(mixed $metadata)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

`Phar::setMetadata()` should be used to store customized data that describes something about the phar archive as a complete entity. `PharFileInfo::setMetadata()` should be used for file-specific meta-data. Meta-data can slow down the performance of loading a phar archive if the data is large.

Some possible uses for meta-data include specifying which file within the archive should be used to bootstrap the archive, or the location of a file manifest like [PEAR]()'s package.xml file. However, any useful data that describes the phar archive may be stored.

## Parameters

- **`$metadata`** — Any PHP variable containing information to store that describes the phar archive

## Return Values

No value is returned.

## Examples

**A `Phar::setMetadata()` example**

```php


<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.php'] = '<?php echo "hello"';
    $p->setMetadata(array('bootstrap' => 'file.php'));
    var_dump($p->getMetadata());
} catch (Exception $e) {
    echo 'Could not create and/or modify phar:', $e;
}
?>

    
```

The above example will output:

```text


array(1) {
  ["bootstrap"]=>
  string(8) "file.php"
}

    
```

## See Also

`Phar::getMetadata()` `Phar::delMetadata()` `Phar::hasMetadata()`
