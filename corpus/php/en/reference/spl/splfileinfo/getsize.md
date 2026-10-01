---
id: "en-php-function-splfileinfo-getsize"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getSize"
title: "Gets file size"
signature: "public int|false SplFileInfo::getSize()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets file size

## Description

```php
public int|false SplFileInfo::getSize()
```

Returns the filesize in bytes for the file referenced.

## Parameters

This function has no parameters.

## Return Values

The filesize in bytes on success, or `false` on failure.

## Errors/Exceptions

A `RuntimeException` will be thrown if the file does not exist or an error occurs.

## Examples

**`SplFileInfo::getSize()` example**

```php


<?php
$info = new SplFileInfo('example.jpg');
echo $info->getFilename() . " " . $info->getSize();
?>

    
```

The above example will output something similar to:

```text


example.jpg 15385

    
```

## See Also

`filesize()`
