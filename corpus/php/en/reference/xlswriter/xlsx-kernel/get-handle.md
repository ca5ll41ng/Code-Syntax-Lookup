---
id: "en-php-function-vtiful-kernel-excel-gethandle"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::getHandle"
title: "Vtiful\\Kernel\\Excel getHandle"
signature: "public Vtiful\\Kernel\\Excel::getHandle()"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.getHandle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel getHandle

## Description

```php
public Vtiful\Kernel\Excel::getHandle()
```

Get the xlsx text resource handle.

## Parameters

This function has no parameters.

## Return Values

Resource

## Examples

**example**

```php


<?php
$config = [
    'path' => './tests'
];

$fileObject  = new \Vtiful\Kernel\Excel($config);

$file = $fileObject->fileName('tutorial.xlsx', 'sheet_one')
    ->header(['name', 'age']);

$handle = $file->getHandle();
?>

   
```
