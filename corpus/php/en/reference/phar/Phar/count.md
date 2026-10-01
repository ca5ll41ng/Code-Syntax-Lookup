---
id: "en-php-function-phar-count"
language: "php"
lang: "en"
category: "function"
name: "Phar::count"
title: "Returns the number of entries (files) in the Phar archive"
signature: "public int Phar::count(int $mode = COUNT_NORMAL)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of entries (files) in the Phar archive

## Description

```php
public int Phar::count(int $mode = COUNT_NORMAL)
```

## Parameters

- **`$mode`** — `$mode` is an integer value specifying the counting mode to be used. By default, it is set to `COUNT_NORMAL`, which counts only the number of items in the archive that have not been deleted or hidden. When set to `COUNT_RECURSIVE`, it counts all items in the archive, including those that have been deleted or hidden.

## Return Values

The number of files contained within this phar, or `0` (the number zero) if none.

## Examples

**A `Phar::count()` example**

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
$p['file.txt'] = 'hi';
echo 'The new phar has ' . $p->count() . " entries\n";
?>

    
```

The above example will output:

```text


The new phar has 0 entries
The new phar has 1 entries

    
```
