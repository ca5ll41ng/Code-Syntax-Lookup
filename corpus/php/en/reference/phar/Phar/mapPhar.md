---
id: "en-php-function-phar-mapphar"
language: "php"
lang: "en"
category: "function"
name: "Phar::mapPhar"
title: "Reads the currently executed file (a phar) and registers its manifest"
signature: "final public static bool Phar::mapPhar(string|null $alias = null, int $offset = 0)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.mapphar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads the currently executed file (a phar) and registers its manifest

## Description

```php
final public static bool Phar::mapPhar(string|null $alias = null, int $offset = 0)
```

This static method can only be used inside a Phar archive's loader stub in order to initialize the phar when it is directly executed, or when it is included in another script.

## Parameters

- **`$alias`** — The alias that can be used in `phar://` URLs to refer to this archive, rather than its full path.
- **`$offset`** — Unused variable, here for compatibility with PEAR's PHP_Archive.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

`PharException` is thrown if not called directly within PHP execution, if no __HALT_COMPILER(); token is found in the current source file, or if the file cannot be opened for reading.

## Examples

**A `Phar::mapPhar()` example**

mapPhar should be used only inside a phar's loader stub. Use loadPhar to load an external phar into memory.

Here is a sample Phar loader stub that uses mapPhar.

```php


<?php
function __autoload($class)
{
    include 'phar://me.phar/' . str_replace('_', '/', $class) . '.php';
}
try {
    Phar::mapPhar('me.phar');
    include 'phar://me.phar/startup.php';
} catch (PharException $e) {
    echo $e->getMessage();
    die('Cannot initialize Phar');
}
__HALT_COMPILER();

    
```

## See Also

`Phar::loadPhar()`
