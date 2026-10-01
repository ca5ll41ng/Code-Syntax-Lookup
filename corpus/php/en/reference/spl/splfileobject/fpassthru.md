---
id: "en-php-function-splfileobject-fpassthru"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fpassthru"
title: "Output all remaining data on a file pointer"
signature: "public int SplFileObject::fpassthru()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fpassthru.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output all remaining data on a file pointer

## Description

```php
public int SplFileObject::fpassthru()
```

Reads to EOF on the given file pointer from the current position and writes the results to the output buffer.

You may need to call `SplFileObject::rewind()` to reset the file pointer to the beginning of the file if you have already written data to the file.

## Parameters

This function has no parameters.

## Return Values

Returns the number of characters read from `$handle` and passed through to the output.

## Examples

**`SplFileObject::fpassthru()` example**

```php


<?php

// Open the file in binary mode
$file = new SplFileObject("./img/ok.png", "rb");

// Send the right headers
header("Content-Type: image/png");
header("Content-Length: " . $file->getSize());

// Dump the picture and end script
$file->fpassthru();
exit;

?>

    
```

## See Also

`fpassthru()`
