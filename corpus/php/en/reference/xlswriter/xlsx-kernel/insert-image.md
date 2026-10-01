---
id: "en-php-function-vtiful-kernel-excel-insertimage"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::insertImage"
title: "Vtiful\\Kernel\\Excel insertImage"
signature: "public Vtiful\\Kernel\\Excel::insertImage(int $row, int $column, string $localImagePath)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.insertImage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel insertImage

## Description

```php
public Vtiful\Kernel\Excel::insertImage(int $row, int $column, string $localImagePath)
```

Insert a local image into the cell.

## Parameters

- **`$row`** — cell row
- **`$column`** — cell column
- **`$localImagePath`** — local image path

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

$file = $excel->fileName("free.xlsx");

$file->insertImage(5, 0, '/vagrant/ASW-G-66.jpg');

$file->output();

   
```
