---
id: "en-php-function-splfileinfo-setinfoclass"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::setInfoClass"
title: "Sets the class used with `SplFileInfo::getFileInfo()` and `SplFileInfo::getPathInfo()`"
signature: "public void SplFileInfo::setInfoClass(string $class = SplFileInfo::class)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.setinfoclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the class used with `SplFileInfo::getFileInfo()` and `SplFileInfo::getPathInfo()`

## Description

```php
public void SplFileInfo::setInfoClass(string $class = SplFileInfo::class)
```

Use this method to set a custom class which will be used when `SplFileInfo::getFileInfo()` and `SplFileInfo::getPathInfo()` are called. The class name passed to this method must be `SplFileInfo` or a class derived from `SplFileInfo`.

## Parameters

- **`$class`** — The class name to use when `SplFileInfo::getFileInfo()` and `SplFileInfo::getPathInfo()` are called.

## Return Values

No value is returned.

## Examples

**`SplFileInfo::setFileClass()` example**

```php


<?php
// Define a class which extends SplFileInfo
class MyFoo extends SplFileInfo {}

$info = new SplFileInfo('foo');
// Set the class name to use
$info->setInfoClass('MyFoo');
var_dump($info->getFileInfo());
?>

    
```

The above example will output something similar to:

```text


object(MyFoo)#2 (0) { } 

    
```

## See Also

`SplFileInfo::getFileInfo()`
