---
id: "en-php-function-function-gzseek"
language: "php"
lang: "en"
category: "function"
name: "gzseek"
title: "Seek on a gz-file pointer"
signature: "int gzseek(resource $stream, int $offset, int $whence = SEEK_SET)"
module: "zlib"
source_url: "https://www.php.net/manual/en/function.gzseek.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Seek on a gz-file pointer

## Description

```php
int gzseek(resource $stream, int $offset, int $whence = SEEK_SET)
```

Sets the file position indicator for the given file pointer to the given offset byte into the file stream. Equivalent to calling (in C) `gzseek(zp, offset, SEEK_SET)`.

If the file is opened for reading, this function is emulated but can be extremely slow. If the file is opened for writing, only forward seeks are supported; `gzseek()` then compresses a sequence of zeroes up to the new starting position.

## Parameters

- **`$stream`** — The gz-file pointer. It must be valid, and must point to a file successfully opened by `gzopen()`.
- **`$offset`** — The seeked offset.
- **`$whence`** — `$whence` values are: `SEEK_SET` - Set position equal to `$offset` bytes. `SEEK_CUR` - Set position to current location plus `$offset`. — If `$whence` is not specified, it is assumed to be `SEEK_SET`.

## Return Values

Upon success, returns 0; otherwise, returns -1. Note that seeking past EOF is not considered an error.

## Examples

**`gzseek()` example**

```php


<?php
$gz = gzopen('somefile.gz', 'r');
gzseek($gz,2);
echo gzgetc($gz);
gzclose($gz);
?>

    
```

## See Also

`gztell()` `gzrewind()`
