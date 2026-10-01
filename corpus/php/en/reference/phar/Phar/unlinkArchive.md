---
id: "en-php-function-phar-unlinkarchive"
language: "php"
lang: "en"
category: "function"
name: "Phar::unlinkArchive"
title: "Completely remove a phar archive from disk and from memory"
signature: "final public static true Phar::unlinkArchive(string $filename)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.unlinkarchive.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Completely remove a phar archive from disk and from memory

## Description

```php
final public static true Phar::unlinkArchive(string $filename)
```

Removes a phar archive from disk and memory.

## Parameters

- **`$filename`** — The path on disk to the phar archive.

## Return Values

Always returns `true`.

## Errors/Exceptions

`PharException` is thrown if there are any open file pointers to the phar archive, or any existing `Phar`, `PharData`, or `PharFileInfo` objects referring to the phar archive.

## Examples

**A `Phar::unlinkArchive()` example**

```php


<?php
// simple usage
Phar::unlinkArchive('/path/to/my.phar');

// more common example:
$p = new Phar('my.phar');
$fp = fopen('phar://my.phar/file.txt', 'r');
// this creates 'my.phar.gz'
$gp = $p->compress(Phar::GZ);
// remove all references to the archive
unset($p);
fclose($fp);
// now remove all traces of the archive
Phar::unlinkArchive('my.phar');
?>

    
```

## See Also

`Phar::delete()` `Phar::offsetUnset()`
