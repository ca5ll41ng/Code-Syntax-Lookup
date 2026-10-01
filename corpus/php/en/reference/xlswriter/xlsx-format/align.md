---
id: "en-php-function-vtiful-kernel-format-align"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Format::align"
title: "Vtiful\\Kernel\\Format align"
signature: "public Vtiful\\Kernel\\Format::align(resource $handle, int $style)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-format.align.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Format align

## Description

```php
public Vtiful\Kernel\Format::align(resource $handle, int $style)
```

set cell align

## Parameters

- **`$handle`** — xlsx file handle
- **`$style`** — `Vtiful\Kernel\Format` constant

## Return Values

Resource

## Examples

**Align style example**

```php


<?php
$config = [
    'path' => './tests'
];

$excel = new \Vtiful\Kernel\Excel($config);
$excel->fileName('tutorial01.xlsx');

$format = new \Vtiful\Kernel\Format($excel->getHandle());
$alignStyle = $format->align(\Vtiful\Kernel\Format::FORMAT_ALIGN_LEFT)->toResource();

$excel->header(['name', 'age'])
    ->data([['viest', 21]])
    ->setColumn('A:A', 200, $alignStyle)
    ->output();
?>

   
```
