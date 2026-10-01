---
id: "en-php-function-phar-isbuffering"
language: "php"
lang: "en"
category: "function"
name: "Phar::isBuffering"
title: "Used to determine whether Phar write operations are being buffered, or are flushing directly to disk"
signature: "public bool Phar::isBuffering()"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.isbuffering.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Used to determine whether Phar write operations are being buffered, or are flushing directly to disk

## Description

```php
public bool Phar::isBuffering()
```

This method can be used to determine whether a Phar will save changes to disk immediately, or whether a call to `Phar::stopBuffering()` is needed to enable saving changes.

Phar write buffering is per-archive, buffering active for the `foo.phar` Phar archive does not affect changes to the `bar.phar` Phar archive.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the write operations are being buffer, `false` otherwise.

## Examples

**A `Phar::isBuffering()` example**

```php


<?php
$p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
$p2 = new Phar('existingphar.phar');
$p['file1.txt'] = 'hi';
var_dump($p->isBuffering());
var_dump($p2->isBuffering());
?>
=2=
<?php
$p->startBuffering();
var_dump($p->isBuffering());
var_dump($p2->isBuffering());
$p->stopBuffering();
?>
=3=
<?php
var_dump($p->isBuffering());
var_dump($p2->isBuffering());
?>

    
```

The above example will output:

```text


bool(false)
bool(false)
=2=
bool(true)
bool(false)
=3=
bool(false)
bool(false)

    
```

## See Also

`Phar::startBuffering()` `Phar::stopBuffering()`
