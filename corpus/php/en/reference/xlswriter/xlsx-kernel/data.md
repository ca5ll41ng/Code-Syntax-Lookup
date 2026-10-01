---
id: "en-php-function-vtiful-kernel-excel-data"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::data"
title: "Vtiful\\Kernel\\Excel data"
signature: "public Vtiful\\Kernel\\Excel::data(array $data)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel data

## Description

```php
public Vtiful\Kernel\Excel::data(array $data)
```

Write a data in the worksheet.

## Parameters

- **`$data`** — worksheet data

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
      ['wjx', 23],
    ]);
?>

   
```
