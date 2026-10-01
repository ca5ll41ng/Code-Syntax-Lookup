---
id: "en-php-function-phar-loadphar"
language: "php"
lang: "en"
category: "function"
name: "Phar::loadPhar"
title: "Loads any phar archive with an alias"
signature: "final public static bool Phar::loadPhar(string $filename, string|null $alias = null)"
module: "phar"
source_url: "https://www.php.net/manual/en/phar.loadphar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Loads any phar archive with an alias

## Description

```php
final public static bool Phar::loadPhar(string $filename, string|null $alias = null)
```

This can be used to read the contents of an external Phar archive. This is most useful for assigning an alias to a phar so that subsequent references to the phar can use the shorter alias, or for loading Phar archives that only contain data and are not intended for execution/inclusion in PHP scripts.

## Parameters

- **`$filename`** — the full or relative path to the phar archive to open
- **`$alias`** — The alias that may be used to refer to the phar archive. Note that many phar archives specify an explicit alias inside the phar archive, and a `PharException` will be thrown if a new alias is specified in this case.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

`PharException` is thrown if an alias is passed in and the phar archive already has an explicit alias

## Examples

**A `Phar::loadPhar()` example**

Phar::loadPhar can be used anywhere to load an external Phar archive, whereas Phar::mapPhar should be used in a loader stub for a Phar.

```php


<?php
try {
    Phar::loadPhar('/path/to/phar.phar', 'my.phar');
    echo file_get_contents('phar://my.phar/file.txt');
} catch (PharException $e) {
    echo $e;
}
?>

    
```

## See Also

`Phar::mapPhar()`
