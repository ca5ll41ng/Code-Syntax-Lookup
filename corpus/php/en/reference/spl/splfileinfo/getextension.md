---
id: "en-php-function-splfileinfo-getextension"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getExtension"
title: "Gets the file extension"
signature: "public string SplFileInfo::getExtension()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getextension.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the file extension

## Description

```php
public string SplFileInfo::getExtension()
```

Retrieves the file extension.

## Parameters

This function has no parameters.

## Return Values

Returns a `string` containing the file extension, or an empty `string` if the file has no extension.

## Examples

**`SplFileInfo::getExtension()` example**

```php


<?php

$info = new SplFileInfo('foo.txt');
var_dump($info->getExtension());

$info = new SplFileInfo('photo.jpg');
var_dump($info->getExtension());

$info = new SplFileInfo('something.tar.gz');
var_dump($info->getExtension());

?>

   
```

The above example will output:

```text


string(3) "txt"
string(3) "jpg"
string(2) "gz"

   
```

## Notes

> Another way of getting the extension is to use the `pathinfo()` function.
>
> ```php <?php $extension = pathinfo($info->getFilename(), PATHINFO_EXTENSION); ?> ```

## See Also

 `SplFileInfo::getFilename()` `SplFileInfo::getBasename()` `pathinfo()`
