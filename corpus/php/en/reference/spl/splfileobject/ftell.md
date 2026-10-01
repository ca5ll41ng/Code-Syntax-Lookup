---
id: "en-php-function-splfileobject-ftell"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::ftell"
title: "Return current file position"
signature: "public int|false SplFileObject::ftell()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.ftell.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return current file position

## Description

```php
public int|false SplFileObject::ftell()
```

Returns the position of the file pointer which represents the current offset in the file stream.

## Parameters

This function has no parameters.

## Return Values

Returns the position of the file pointer as an integer, or `false` on error.

## Examples

**`SplFileObject::ftell()` example**

```php


<?php
$file = new SplFileObject("/etc/passwd");

// Read first line
$data = $file->fgets();

// Where are we?
echo $file->ftell();
?>

    
```

## See Also

`ftell()`
