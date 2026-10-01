---
id: "en-php-function-vtiful-kernel-excel-setcolumn"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::setColumn"
title: "Vtiful\\Kernel\\Excel setColumn"
signature: "public Vtiful\\Kernel\\Excel::setColumn(string $range, float $width, [resource $format = ...])"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.setColumn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel setColumn

## Description

```php
public Vtiful\Kernel\Excel::setColumn(string $range, float $width, [resource $format = ...])
```

Set the format of the column.

## Parameters

- **`$range`** — cell start and end coordinate strings
- **`$width`** — column width
- **`$format`** — cell format resource

## Return Values

`Vtiful\Kernel\Excel` instance

## Examples

**setColumn example**

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
    ->setColumn('A:A', 200, $boldStyle)
    ->output();

   
```
