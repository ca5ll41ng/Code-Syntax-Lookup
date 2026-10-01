---
id: "en-php-function-splfileinfo-getperms"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::getPerms"
title: "Gets file permissions"
signature: "public int|false SplFileInfo::getPerms()"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.getperms.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets file permissions

## Description

```php
public int|false SplFileInfo::getPerms()
```

Gets the file permissions for the file.

## Parameters

This function has no parameters.

## Return Values

Returns the file permissions on success, or `false` on failure.

## Examples

**`SplFileInfo::getPerms()` example**

```php


<?php
$info = new SplFileInfo('/tmp');
echo substr(sprintf('%o', $info->getPerms()), -4);

$info = new SplFileInfo(__FILE__);
echo substr(sprintf('%o', $info->getPerms()), -4);
?>

    
```

The above example will output something similar to:

```text


1777
0644

    
```
