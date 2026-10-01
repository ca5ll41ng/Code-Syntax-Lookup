---
id: "en-php-function-splfileobject-fgets"
language: "php"
lang: "en"
category: "function"
name: "SplFileObject::fgets"
title: "Gets line from file"
signature: "public string SplFileObject::fgets()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileobject.fgets.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets line from file

## Description

```php
public string SplFileObject::fgets()
```

Gets a line from the file.

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the next line from the file.

## Errors/Exceptions

Throws a `RuntimeException` if the file cannot be read.

## Examples

**`SplFileObject::fgets()` example**

This example simply outputs the contents of `file.txt` line-by-line.

```php


<?php
$file = new SplFileObject("file.txt");
while (!$file->eof()) {
    echo $file->fgets();
}
?>

    
```

## See Also

`fgets()` `SplFileObject::fgetss()` `SplFileObject::fgetc()` `SplFileObject::current()`
