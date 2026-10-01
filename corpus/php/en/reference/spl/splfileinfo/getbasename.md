---
id: "en-php-function-splfileinfo-getbasename"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getBasename"
title: "Gets the base name of the file"
signature: "public string SplFileInfo::getBasename(string $suffix = \"\")"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getbasename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the base name of the file

## Description

```php
public string SplFileInfo::getBasename(string $suffix = "")
```

This method returns the base name of the file, directory, or link without path info.

> `SplFileInfo::getBasename()` is locale aware, so for it to see the correct basename with multibyte character paths, the matching locale must be set using the `setlocale()` function.

## Parameters

- **`$suffix`** — Optional suffix to omit from the base name returned.

## Return Values

Returns the base name without path information.

## Examples

**`SplFileInfo::getBasename()` example**

```php


<?php
$info = new SplFileInfo('file.txt');
var_dump($info->getBasename());

$info = new SplFileInfo('/path/to/file.txt');
var_dump($info->getBasename());

$info = new SplFileInfo('/path/to/file.txt');
var_dump($info->getBasename('.txt'));
?>

    
```

The above example will output something similar to:

```text


string(8) "file.txt"
string(8) "file.txt"
string(4) "file" 

    
```

## See Also

`SplFileInfo::getFilename()`
