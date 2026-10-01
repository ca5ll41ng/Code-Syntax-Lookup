---
id: "en-php-function-vtiful-kernel-excel-setrow"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::setRow"
title: "Vtiful\\Kernel\\Excel setRow"
signature: "public Vtiful\\Kernel\\Excel::setRow(string $range, float $height, [resource $format = ...])"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.setRow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel setRow

## Description

```php
public Vtiful\Kernel\Excel::setRow(string $range, float $height, [resource $format = ...])
```

Set the format of the row.

## Parameters

- **`$range`** — cell start and end coordinate strings
- **`$height`** — row height
- **`$format`** — cell format resource

## Return Values

`Vtiful\Kernel\Excel` instance

## Examples

**setRow example**

```php


<?php
$config = [
    'path' => './tests'
];

$excel = new \Vtiful\Kernel\Excel($config);
$excel->fileName('tutorial01.xlsx');

$format = new \Vtiful\Kernel\Format($excel->getHandle());
$boldStyle = $format->bold()->toResource();

$excel->header(['name', 'age'])
    ->data([['viest', 21]])
    ->setRow('A1', 20, $boldStyle)
    ->output();

   
```
