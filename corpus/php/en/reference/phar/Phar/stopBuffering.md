---
id: "en-php-function-phar-stopbuffering"
language: "php"
lang: "en"
category: "function"
name: "Phar::stopBuffering"
title: "Stop buffering write requests to the Phar archive, and save changes to disk"
signature: "public void Phar::stopBuffering()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.stopbuffering.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stop buffering write requests to the Phar archive, and save changes to disk

## Description

```php
public void Phar::stopBuffering()
```

`Phar::stopBuffering()` is used in conjunction with the `Phar::startBuffering()` method. `Phar::startBuffering()` can provide a significant performance boost when creating or modifying a Phar archive with a large number of files. Ordinarily, every time a file within a Phar archive is created or modified in any way, the entire Phar archive will be recreated with the changes. In this way, the archive will be up-to-date with the activity performed on it.

However, this can be unnecessary when simply creating a new Phar archive, when it would make more sense to write the entire archive out at once. Similarly, it is often necessary to make a series of changes and to ensure that they all are possible before making any changes on disk, similar to the relational database concept of transactions. The `Phar::startBuffering()`/`Phar::stopBuffering()` pair of methods is provided for this purpose.

Phar write buffering is per-archive, buffering active for the `foo.phar` Phar archive does not affect changes to the `bar.phar` Phar archive.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

`PharException` is thrown if any problems are encountered flushing changes to disk.

## Examples

**A `Phar::stopBuffering()` example**

```php


<?php
$p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
$p['file1.txt'] = 'hi';
$p->startBuffering();
var_dump($p->getStub());
$p->setStub("<?php
function __autoload(\$class)
{
    include 'phar://brandnewphar.phar/' . str_replace('_', '/', \$class) . '.php';
}
Phar::mapPhar('brandnewphar.phar');
include 'phar://brandnewphar.phar/startup.php';
__HALT_COMPILER();");
$p->stopBuffering();
var_dump($p->getStub());
?>

    
```

The above example will output:

```text


string(24) "<?php __HALT_COMPILER();"
string(195) "<?php
function __autoload($class)
{
    include 'phar://' . str_replace('_', '/', $class);
}
Phar::mapPhar('brandnewphar.phar');
include 'phar://brandnewphar.phar/startup.php';
__HALT_COMPILER();"

    
```

## See Also

`Phar::startBuffering()` `Phar::isBuffering()`
