---
id: "en-php-function-vtiful-kernel-excel-filename"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::fileName"
title: "Vtiful\\Kernel\\Excel fileName"
signature: "public Vtiful\\Kernel\\Excel::fileName(string $fileName, [string $sheetName = ...])"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.filename.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel fileName

## Description

```php
public Vtiful\Kernel\Excel::fileName(string $fileName, [string $sheetName = ...])
```

Create a brand new xlsx file and create a worksheet.

## Parameters

- **`$fileName`** — XLSX file name
- **`$sheetName`** — Worksheet name

## Return Values

`Vtiful\Kernel\Excel` instance

## Examples

**example**

```php


<?php
$config = [
  'path' => '/home/viest'
];

$fileObject = new \Vtiful\Kernel\Excel($config);

$file = $fileObject->fileName('tutorial.xlsx', 'sheet');
?>

   
```
