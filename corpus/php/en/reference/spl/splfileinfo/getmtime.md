---
id: "en-php-function-splfileinfo-getmtime"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getMTime"
title: "Gets the last modified time"
signature: "public int|false SplFileInfo::getMTime()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getmtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the last modified time

## Description

```php
public int|false SplFileInfo::getMTime()
```

Returns the time when the contents of the file were changed. The time returned is a Unix timestamp.

## Parameters

This function has no parameters.

## Return Values

Returns the last modified time for the file, in a Unix timestamp on success, or `false` on failure.

## Examples

**`SplFileInfo::getMTime()` example**

```php


<?php
$info = new SplFileInfo('example.jpg');
echo 'Last modified at ' . date('g:i a', $info->getMTime());
?>

    
```

The above example will output something similar to:

```text


Last modified at 1:49 pm

    
```

## See Also

`filemtime()` `SplFileInfo::getATime()` `SplFileInfo::getCTime()`
