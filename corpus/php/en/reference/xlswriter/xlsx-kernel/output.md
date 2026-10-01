---
id: "en-php-function-vtiful-kernel-excel-output"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::output"
title: "Vtiful\\Kernel\\Excel output"
signature: "public Vtiful\\Kernel\\Excel::output()"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.output.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel output

## Description

```php
public Vtiful\Kernel\Excel::output()
```

Output xlsx file to disk.

## Parameters

This function has no parameters.

## Return Values

XLSX file path;

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
    
$path = $file->output();
?>

   
```
