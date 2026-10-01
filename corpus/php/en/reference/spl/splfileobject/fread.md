---
id: "en-php-function-splfileobject-fread"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fread"
title: "Read from file"
signature: "public string|false SplFileObject::fread(int $length)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fread.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Read from file

## Description

```php
public string|false SplFileObject::fread(int $length)
```

Reads the given number of bytes from the file.

## Parameters

- **`$length`** — The number of bytes to read.

## Return Values

Returns the string read from the file or `false` on failure.

## Examples

**`SplFileObject::fread()` example**

```php


<?php
// Get contents of a file into a string
$filename = "/usr/local/something.txt";
$file = new SplFileObject($filename, "r");
$contents = $file->fread($file->getSize());
?>

    
```

## Notes

> Note that `SplFileObject::fread()` reads from the current position of the file pointer. Use `SplFileObject::ftell()` to find the current position of the pointer and `SplFileObject::rewind()` (or `SplFileObject::fseek()`) to rewind the pointer position.

## See Also

`fread()`
