---
id: "en-php-function-splfileinfo-getatime"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getATime"
title: "Gets last access time of the file"
signature: "public int|false SplFileInfo::getATime()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getatime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets last access time of the file

## Description

```php
public int|false SplFileInfo::getATime()
```

Gets the last access time for the file.

## Parameters

This function has no parameters.

## Return Values

Returns the time the file was last accessed on success, or `false` on failure.

## Errors/Exceptions

Throws `RuntimeException` on error.

## Examples

**`SplFileInfo::getATime()` example**

```php


<?php
$info = new SplFileInfo('example.jpg');
echo 'Last accessed at ' . date('g:i a', $info->getATime());
?>

    
```

The above example will output something similar to:

```text


Last accessed at 1:49 pm

    
```

## See Also

`fileatime()` `SplFileInfo::getCTime()` `SplFileInfo::getMTime()`
