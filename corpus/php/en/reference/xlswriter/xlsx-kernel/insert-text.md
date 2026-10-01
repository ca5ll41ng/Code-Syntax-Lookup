---
id: "en-php-function-vtiful-kernel-excel-inserttext"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::insertText"
title: "Vtiful\\Kernel\\Excel insertText"
signature: "public Vtiful\\Kernel\\Excel::insertText(int $row, int $column, int|float|string $data, [string $format = ...])"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.insertText.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel insertText

## Description

```php
public Vtiful\Kernel\Excel::insertText(int $row, int $column, int|float|string $data, [string $format = ...])
```

Write text in a cell.

## Parameters

- **`$row`** — cell row
- **`$column`** — cell column
- **`$data`** — data to be written
- **`$format`** — String format

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

$file = $excel->fileName("free.xlsx")
    ->header(['name', 'money']);

for ($index = 0; $index < 10; $index++) {
    $file->insertText($index+1, 0, 'viest');
    $file->insertText($index+1, 1, 10000, '#,##0');
}

$file->output();

   
```
