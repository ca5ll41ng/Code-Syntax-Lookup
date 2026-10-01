---
id: "en-php-function-vtiful-kernel-excel-header"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::header"
title: "Vtiful\\Kernel\\Excel header"
signature: "public Vtiful\\Kernel\\Excel::header(array $headerData)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.header.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel header

## Description

```php
public Vtiful\Kernel\Excel::header(array $headerData)
```

Write a header in the worksheet.

## Parameters

- **`$headerData`** — worksheet header data

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
    ->header(['name', 'age']);
?>

   
```
