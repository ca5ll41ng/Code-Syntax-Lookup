---
id: "en-php-function-splfileobject-fflush"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fflush"
title: "Flushes the output to the file"
signature: "public bool SplFileObject::fflush()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fflush.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Flushes the output to the file

## Description

```php
public bool SplFileObject::fflush()
```

Forces a write of all buffered output to the file.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success or `false` on failure.

## Examples

**`SplFileObject::fflush()` example**

```php


<?php
$file = new SplFileObject('misc.txt', 'r+');
$file->rewind();
$file->fwrite("Foo");
$file->fflush();
$file->ftruncate($file->ftell());
?>

    
```

## See Also

`SplFileObject::fwrite()`
