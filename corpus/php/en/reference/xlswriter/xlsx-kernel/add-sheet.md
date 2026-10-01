---
id: "en-php-function-vtiful-kernel-excel-addsheet"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::addSheet"
title: "Vtiful\\Kernel\\Excel addSheet"
signature: "public Vtiful\\Kernel\\Excel::addSheet(string $sheetName)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.addSheet.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel addSheet

## Description

```php
public Vtiful\Kernel\Excel::addSheet(string $sheetName)
```

Create a new worksheet in the xlsx file.

## Parameters

- **`$sheetName`** — Worksheet name

## Return Values

`Vtiful\Kernel\Excel` instance

## Examples

**example**

```php


<?php
$config = [
    'path' => './tests'
];

$fileObject  = new \Vtiful\Kernel\Excel($config);

$file = $fileObject->fileName('tutorial.xlsx', 'sheet_one')
    ->header(['name', 'age'])
    ->data([
        ['viest', 23],
        ['wjx', 23]
    ]);

$file->addSheet('sheet_two')
    ->header(['name', 'age'])
    ->data([
        ['james', 33],
        ['king', 33]
    ]);

$file->output();
?>

   
```
