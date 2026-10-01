---
id: "en-php-function-phar-setstub"
language: "php"
lang: "en"
category: "function"
name: "Phar::setStub"
title: "Used to set the PHP loader or bootstrap stub of a Phar archive"
signature: "public true Phar::setStub(resource|string $stub, int $length = -1)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.setstub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to set the PHP loader or bootstrap stub of a Phar archive

## Description

```php
public true Phar::setStub(resource|string $stub, int $length = -1)
```

> This method requires the php.ini setting `phar.readonly` to be set to `0` in order to work for `Phar` objects. Otherwise, a `PharException` will be thrown.

This method is used to add a PHP bootstrap loader stub to a new Phar archive, or to replace the loader stub in an existing Phar archive.

The loader stub for a Phar archive is used whenever an archive is included directly as in this example:

```php

    
<?php
include 'myphar.phar';
?>
    
   
```

or by simple execution:

```text

    
php myphar.phar
    
   
```

The loader is not accessed when including a file through the `phar` stream wrapper like so:

```php

   
<?php
include 'phar://myphar.phar/somefile.php';
?>
   
  
```

## Parameters

- **`$stub`** — A string or an open stream handle to use as the executable stub for this phar archive.
- **`$length`** — Length of `$stub` in bytes.
  > Passing the `$length` argument with a `resource` in the first argument is *DEPRECATED* as of PHP 8.3.0. Use `$phar->setStub(stream_get_contents($resource))` instead.



## Return Values

Always returns `true`.

## Errors/Exceptions

`UnexpectedValueException` is thrown if phar.readonly is enabled in php.ini. `PharException` is thrown if any problems are encountered flushing changes to disk.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | The return type is `true` now; previously, it was `bool`. |
| 8.3.0 | Calling `Phar::setStub()` with a `resource` and a `$length` is now deprecated. Such calls should be replaced by: $phar->setStub(stream_get_contents($resource)); |

## Examples

**A `Phar::setStub()` example**

```php


<?php

try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['a.php'] = '<?php var_dump("Hello");';
    $p->setStub('<?php var_dump("First"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>');
    include 'phar://brandnewphar.phar/a.php';
    var_dump($p->getStub());

    $p['b.php'] = '<?php var_dump("World");';
    $p->setStub('<?php var_dump("Second"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>');
    include 'phar://brandnewphar.phar/b.php';
    var_dump($p->getStub());
} catch (Exception $e) {
    echo 'Write operations failed on brandnewphar.phar: ', $e;
}
?>

    
```

The above example will output:

```text


string(5) "Hello"
string(82) "<?php var_dump("First"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>"
string(5) "World"
string(83) "<?php var_dump("Second"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>"

    
```

## See Also

`Phar::getStub()` `Phar::createDefaultStub()`
