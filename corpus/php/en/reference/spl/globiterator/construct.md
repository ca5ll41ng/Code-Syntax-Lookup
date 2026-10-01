---
id: "en-php-function-globiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "GlobIterator::__construct"
title: "Construct a directory using glob"
signature: "public GlobIterator::__construct(string $pattern, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO)"
module: "spl"
source_url: "https://www.php.net/manual/en/globiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a directory using glob

## Description

```php
public GlobIterator::__construct(string $pattern, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO)
```

Constructs a new directory iterator from a glob expression.

## Parameters

- **`$pattern`** — A `glob()` pattern.
- **`$flags`** — Option flags, the flags may be a bitmask of the `FilesystemIterator` constants.

## Errors/Exceptions

Throws an `UnexpectedValueException` if the `$directory` does not exist.

Throws a `ValueError` if the `$directory` is an empty string.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | Now throws a `ValueError` if `$directory` is an empty string; previously it threw a `RuntimeException`. |

## Examples

**`GlobIterator` example**

```php


<?php
$iterator = new GlobIterator('*.dll', FilesystemIterator::KEY_AS_FILENAME);

if (!$iterator->count()) {
    echo 'No matches';
} else {
    $n = 0;

    printf("Matched %d item(s)\r\n", $iterator->count());

    foreach ($iterator as $item) {
        printf("[%d] %s\r\n", ++$n, $iterator->key());
    }
}
?>

    
```

The above example will output something similar to:

```text


Matched 2 item(s)
[1] php5ts.dll
[2] php_gd2.dll

    
```

## See Also

`DirectoryIterator::__construct()` `GlobIterator::count()` `glob()`
