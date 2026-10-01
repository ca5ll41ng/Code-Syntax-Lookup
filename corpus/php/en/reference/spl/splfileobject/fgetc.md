---
id: "en-php-function-splfileobject-fgetc"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fgetc"
title: "Gets character from file"
signature: "public string|false SplFileObject::fgetc()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fgetc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets character from file

## Description

```php
public string|false SplFileObject::fgetc()
```

Gets a character from the file.

## Parameters

This function has no parameters.

## Return Values

Returns a string containing a single character read from the file or `false` on EOF.

> This function may return Boolean `false`, but may also return a non-Boolean value which evaluates to `false`. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

## Examples

**`SplFileObject::fgetc()` example**

```php


<?php
$file = new SplFileObject('file.txt');
while (false !== ($char = $file->fgetc())) {
    echo "$char\n";
}
?>

    
```

## See Also

`SplFileObject::fgets()`
