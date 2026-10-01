---
id: "en-php-function-splfileobject-fseek"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fseek"
title: "Seek to a position"
signature: "public int SplFileObject::fseek(int $offset, int $whence = SEEK_SET)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fseek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seek to a position

## Description

```php
public int SplFileObject::fseek(int $offset, int $whence = SEEK_SET)
```

Seek to a position in the file measured in bytes from the beginning of the file, obtained by adding `$offset` to the position specified by `$whence`.

## Parameters

- **`$offset`** — The offset. A negative value can be used to move backwards through the file which is useful when SEEK_END is used as the `$whence` value.
- **`$whence`** — `$whence` values are: `SEEK_SET` - Set position equal to `$offset` bytes. `SEEK_CUR` - Set position to current location plus `$offset`. `SEEK_END` - Set position to end-of-file plus `$offset`. — If `$whence` is not specified, it is assumed to be `SEEK_SET`.

## Return Values

Returns 0 if the seek was successful, -1 otherwise. Note that seeking past EOF is not considered an error.

## Examples

**`SplFileObject::fseek()` example**

```php


<?php
$file = new SplFileObject("somefile.txt");

// Read first line
$data = $file->fgets();

// Move back to the beginning of the file
// Same as $file->rewind();
$file->fseek(0);
?>

    
```

## See Also

`fseek()`
