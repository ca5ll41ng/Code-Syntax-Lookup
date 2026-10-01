---
id: "en-php-function-splfileinfo-setfileclass"
language: "php"
lang: "en"
category: "function"
name: "SplFileInfo::setFileClass"
title: "Sets the class used with `SplFileInfo::openFile()`"
signature: "public void SplFileInfo::setFileClass(string $class = SplFileObject::class)"
module: "spl"
source_url: "https://www.php.net/manual/en/splfileinfo.setfileclass.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the class used with `SplFileInfo::openFile()`

## Description

```php
public void SplFileInfo::setFileClass(string $class = SplFileObject::class)
```

Use this method to set a custom class which will be used when `SplFileInfo::openFile()` is called. The class name passed to this method must be `SplFileObject` or a class derived from `SplFileObject`.

## Parameters

- **`$class`** — The class name to use when `SplFileInfo::openFile()` is called.

## Return Values

No value is returned.

## Examples

**`SplFileInfo::setFileClass()` example**

```php


<?php
// Create a class extending SplFileObject
class MyFoo extends SplFileObject {}

$info = new SplFileInfo(__FILE__);
// Set the class to use
$info->setFileClass('MyFoo');
var_dump($info->openFile());
?>

    
```

The above example will output something similar to:

```text


object(MyFoo)#2 (0) { } 

    
```

## See Also

`SplFileInfo::openFile()`
