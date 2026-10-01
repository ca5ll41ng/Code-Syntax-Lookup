---
id: "en-php-function-splfileinfo-isreadable"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::isReadable"
title: "Tells if file is readable"
signature: "public bool SplFileInfo::isReadable()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.isreadable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells if file is readable

## Description

```php
public bool SplFileInfo::isReadable()
```

Check if the file is readable.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if readable, `false` otherwise.

## Examples

**`SplFileInfo::isReadable()` example**

```php


<?php
$info = new SplFileInfo('readable.jpg');
if ($info->isReadable()) {
    echo $info->getFilename() . ' is readable';
}
?>

    
```

The above example will output something similar to:

```text


readable.jpg is readable

    
```
