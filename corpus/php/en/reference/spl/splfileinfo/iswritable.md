---
id: "en-php-function-splfileinfo-iswritable"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::isWritable"
title: "Tells if the entry is writable"
signature: "public bool SplFileInfo::isWritable()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.iswritable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tells if the entry is writable

## Description

```php
public bool SplFileInfo::isWritable()
```

Checks if the current entry is writable.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if writable, `false` otherwise;

## Examples

**`SplFileInfo::isWritable()` example**

```php


<?php
$info = new SplFileInfo('locked.jpg');
if (!$info->isWritable()) {
    echo $info->getFilename() . ' is not writable';
}
?>

    
```

The above example will output something similar to:

```text


locked.jpg is not writable

    
```
