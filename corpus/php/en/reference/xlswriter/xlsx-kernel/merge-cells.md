---
id: "en-php-function-vtiful-kernel-excel-mergecells"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::mergeCells"
title: "Vtiful\\Kernel\\Excel mergeCells"
signature: "public Vtiful\\Kernel\\Excel::mergeCells(string $scope, string $data)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.mergeCells.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel mergeCells

## Description

```php
public Vtiful\Kernel\Excel::mergeCells(string $scope, string $data)
```

Merge Cells.

## Parameters

- **`$scope`** — cell start and end coordinate strings
- **`$data`** — string data

## Return Values

`Vtiful\Kernel\Excel` instance

## Examples

**example**

```php


<?php
$config = [
    'path' => './tests'
];

$excel = new \Vtiful\Kernel\Excel($config);

$excel->fileName("test.xlsx")
        ->mergeCells('A1:C1', 'Merge cells')
        ->output();

   
```
