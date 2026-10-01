---
id: "en-php-function-phar-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "Phar::offsetExists"
title: "Determines whether a file exists in the phar"
signature: "public bool Phar::offsetExists(string $localName)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines whether a file exists in the phar

## Description

```php
public bool Phar::offsetExists(string $localName)
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets.

offsetExists() is called whenever `isset()` is called.

## Parameters

- **`$localName`** — The filename (relative path) to look for in a Phar.

## Return Values

Returns `true` if the file exists within the phar, or `false` if not.

## Examples

**A `Phar::offsetExists()` example**

```php


<?php
$p = new Phar(dirname(__FILE__) . '/my.phar', 0, 'my.phar');
$p['firstfile.txt'] = 'first file';
$p['secondfile.txt'] = 'second file';
// the next set of lines call offsetExists() indirectly
var_dump(isset($p['firstfile.txt']));
var_dump(isset($p['nothere.txt']));
?>

    
```

The above example will output:

```text


bool(true)
bool(false)

    
```

## See Also

`Phar::offsetGet()` `Phar::offsetSet()` `Phar::offsetUnset()`
