---
id: "en-php-function-phar-getstub"
language: "php"
lang: "en"
category: "function"
name: "Phar::getStub"
title: "Return the PHP loader or bootstrap stub of a Phar archive"
signature: "public string Phar::getStub()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.getstub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the PHP loader or bootstrap stub of a Phar archive

## Description

```php
public string Phar::getStub()
```

Phar archives contain a bootstrap loader, or `stub` written in PHP that is executed when the archive is executed in PHP either via include:

```php

    
<?php
include 'myphar.phar';
?>
    
   
```

or by simple execution:

```text

    
php myphar.phar
    
   
```

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the contents of the bootstrap loader (stub) of the current Phar archive.

## Errors/Exceptions

Throws `RuntimeException` if it is not possible to read the stub from the Phar archive.

## Examples

**A `Phar::getStub()` example**

```php


<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
echo $p->getStub();
echo "==NEXT==\n";
$p->setStub("<?php
function __autoload($class)
{
    include 'phar://' . str_replace('_', '/', $class);
}
Phar::mapPhar('myphar.phar');
include 'phar://myphar.phar/startup.php';
__HALT_COMPILER(); ?>");
echo $p->getStub();
?>

    
```

The above example will output:

```text


<?php __HALT_COMPILER(); ?>
==NEXT==
<?php
function __autoload($class)
{
    include 'phar://' . str_replace('_', '/', $class);
}
Phar::mapPhar('myphar.phar');
include 'phar://myphar.phar/startup.php';
__HALT_COMPILER(); ?>

    
```

## See Also

`Phar::setStub()` `Phar::createDefaultStub()`
