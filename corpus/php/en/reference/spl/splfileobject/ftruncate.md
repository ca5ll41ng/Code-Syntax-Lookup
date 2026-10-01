---
id: "en-php-function-splfileobject-ftruncate"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::ftruncate"
title: "Truncates the file to a given length"
signature: "public bool SplFileObject::ftruncate(int $size)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.ftruncate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Truncates the file to a given length

## Description

```php
public bool SplFileObject::ftruncate(int $size)
```

Truncates the file to `$size` bytes.

## Parameters

- **`$size`** — The size to truncate to.
  > If `$size` is larger than the file it is extended with null bytes.
  >
  > If `$size` is smaller than the file, the extra data will be lost.



## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SplFileObject::ftruncate()` example**

```php


<?php
// Create file containing "Hello World!"
$file = new SplFileObject("/tmp/ftruncate", "w+");
$file->fwrite("Hello World!");

// Truncate to 5 bytes
$file->ftruncate(5);

// Rewind and read data
$file->rewind();
echo $file->fgets();
?>

    
```

The above example will output something similar to:

```text


Hello

    
```

## See Also

`ftruncate()`
