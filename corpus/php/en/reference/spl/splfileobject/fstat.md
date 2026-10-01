---
id: "en-php-function-splfileobject-fstat"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fstat"
title: "Gets information about the file"
signature: "public array SplFileObject::fstat()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fstat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets information about the file

## Description

```php
public array SplFileObject::fstat()
```

Gathers the statistics of the file. Behaves identically to `fstat()`.

## Parameters

This function has no parameters.

## Return Values

Returns an array with the statistics of the file; the format of the array is described in detail on the `stat()` manual page.

## Examples

**`SplFileObject::fstat()` example**

```php


<?php
$file = new SplFileObject("/etc/passwd");
$stat = $file->fstat();

// Print only the associative part
print_r(array_slice($stat, 13));

?>

    
```

The above example will output something similar to:

```text


Array
(
    [dev] => 771
    [ino] => 488704
    [mode] => 33188
    [nlink] => 1
    [uid] => 0
    [gid] => 0
    [rdev] => 0
    [size] => 1114
    [atime] => 1061067181
    [mtime] => 1056136526
    [ctime] => 1056136526
    [blksize] => 4096
    [blocks] => 8
)

    
```

## See Also

`fstat()` `stat()`
