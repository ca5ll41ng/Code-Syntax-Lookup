---
id: "en-php-function-phar-getmetadata"
language: "php"
lang: "en"
category: "function"
name: "Phar::getMetadata"
title: "Returns phar archive meta-data"
signature: "public mixed Phar::getMetadata(array $unserializeOptions = [])"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getmetadata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns phar archive meta-data

## Description

```php
public mixed Phar::getMetadata(array $unserializeOptions = [])
```

Retrieve archive meta-data. Meta-data can be any PHP variable that can be serialized.

> Accessing the meta-data will trigger deserialization, which can trigger the execution of arbitrary PHP code. Do not use this on untrusted phar archives, or configure the `$unserializeOptions` in a secure manner.

## Parameters

No parameters.

## Return Values

Any PHP value that can be serialized and is stored as meta-data for the Phar archive, or `null` if no meta-data is stored.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | The parameter `$unserializeOptions` has been added. |

## Examples

**A `Phar::getMetadata()` example**

```php


<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.php'] = '<?php echo "hello";';
    $p->setMetadata(array('bootstrap' => 'file.php'));
    var_dump($p->getMetadata());
} catch (Exception $e) {
    echo 'Could not modify phar:', $e;
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

`Phar::setMetadata()` `Phar::delMetadata()` `Phar::hasMetadata()`
