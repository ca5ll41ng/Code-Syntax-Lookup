---
id: "en-php-function-splfileinfo-islink"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::isLink"
title: "Tells if the file is a link"
signature: "public bool SplFileInfo::isLink()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.islink.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells if the file is a link

## Description

```php
public bool SplFileInfo::isLink()
```

Use this method to check if the file referenced by the SplFileInfo object is a link.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the file is a link, `false` otherwise.

## Examples

**`SplFileInfo::isLink()` example**

```php


<?php
$info = new SplFileInfo('/path/to/symlink');
if ($info->isLink()) {
    echo 'The real path is '.$info->getRealPath();
}
?>

    
```

## See Also

`SplFileInfo::getRealPath()`
