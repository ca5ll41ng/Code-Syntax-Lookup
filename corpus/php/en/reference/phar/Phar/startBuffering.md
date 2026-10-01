---
id: "en-php-function-phar-startbuffering"
language: "php"
lang: "en"
category: "function"
name: "Phar::startBuffering"
title: "Start buffering Phar write operations, do not modify the Phar object on disk"
signature: "public void Phar::startBuffering()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.startbuffering.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Start buffering Phar write operations, do not modify the Phar object on disk

## Description

```php
public void Phar::startBuffering()
```

Although technically unnecessary, the `Phar::startBuffering()` method can provide a significant performance boost when creating or modifying a Phar archive with a large number of files. Ordinarily, every time a file within a Phar archive is created or modified in any way, the entire Phar archive will be recreated with the changes. In this way, the archive will be up-to-date with the activity performed on it.

However, this can be unnecessary when simply creating a new Phar archive, when it would make more sense to write the entire archive out at once. Similarly, it is often necessary to make a series of changes and to ensure that they all are possible before making any changes on disk, similar to the relational database concept of transactions. the `Phar::startBuffering()`/`Phar::stopBuffering()` pair of methods is provided for this purpose.

Phar write buffering is per-archive, buffering active for the `foo.phar` Phar archive does not affect changes to the `bar.phar` Phar archive.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Examples

**A `Phar::startBuffering()` example**

```php


<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
} catch (Exception $e) {
    echo 'Could not create phar:', $e;
}
echo 'The new phar has ' . $p->count() . " entries\n";
$p->startBuffering();
$p['file.txt'] = 'hi';
$p['file2.txt'] = 'there';
$p['file2.txt']->setCompressedGZ();
$p['file3.txt'] = 'babyface';
$p['file3.txt']->setMetadata(42);
$p->setStub("<?php
function __autoload($class)
{
    include 'phar://myphar.phar/' . str_replace('_', '/', $class) . '.php';
}
Phar::mapPhar('myphar.phar');
include 'phar://myphar.phar/startup.php';
__HALT_COMPILER();");
$p->stopBuffering();
?>

    
```

## See Also

`Phar::stopBuffering()` `Phar::isBuffering()`
