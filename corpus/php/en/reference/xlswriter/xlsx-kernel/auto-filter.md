---
id: "en-php-function-vtiful-kernel-excel-autofilter"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::autoFilter"
title: "Vtiful\\Kernel\\Excel autoFilter"
signature: "public Vtiful\\Kernel\\Excel::autoFilter(string $scope)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.autoFilter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel autoFilter

## Description

```php
public Vtiful\Kernel\Excel::autoFilter(string $scope)
```

Add autofilter to a worksheet.

## Parameters

- **`$scope`** — Cell start and end coordinate string.

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

$file = $fileObject->fileName('test.xlsx')
        ->header(['name', 'age'])
        ->data($data)
        ->autoFilter('A1:B11')  // auto filter
        ->output();
?>

   
```
