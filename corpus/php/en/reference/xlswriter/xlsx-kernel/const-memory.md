---
id: "en-php-function-vtiful-kernel-excel-constmemory"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::constMemory"
title: "Vtiful\\Kernel\\Excel constMemory"
signature: "public Vtiful\\Kernel\\Excel::constMemory(string $fileName, [string $sheetName = ...])"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.constMemory.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel constMemory

## Description

```php
public Vtiful\Kernel\Excel::constMemory(string $fileName, [string $sheetName = ...])
```

Write a large file with constant memory usage.

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

$file = $fileObject->constMemory('tutorial.xlsx', 'sheet');
?>

   
```
