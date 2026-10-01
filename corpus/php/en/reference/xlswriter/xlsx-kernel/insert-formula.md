---
id: "en-php-function-vtiful-kernel-excel-insertformula"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::insertFormula"
title: "Vtiful\\Kernel\\Excel insertFormula"
signature: "public Vtiful\\Kernel\\Excel::insertFormula(int $row, int $column, string $formula)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.insertFormula.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel insertFormula

## Description

```php
public Vtiful\Kernel\Excel::insertFormula(int $row, int $column, string $formula)
```

Insert calculation formula.

## Parameters

- **`$row`** — cell row
- **`$column`** — cell column
- **`$formula`** — formula string

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

for($index = 1; $index < 10; $index++) {
    $file->insertText($index, 0, 'viest');
    $file->insertText($index, 1, 10);
}

$file->insertText(12, 0, "Total");
$file->insertFormula(12, 1, '=SUM(B2:B11)'); // insert formula

$file->output();

   
```
