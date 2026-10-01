---
id: "en-php-function-vtiful-kernel-format-underline"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Format::underline"
title: "Vtiful\\Kernel\\Format underline"
signature: "public Vtiful\\Kernel\\Format::underline(resource $handle, int $style)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-format.underline.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Format underline

## Description

```php
public Vtiful\Kernel\Format::underline(resource $handle, int $style)
```

`Vtiful\Kernel\Format` underline format

## Parameters

- **`$handle`** — xlsx file handle
- **`$style`** — `Vtiful\Kernel\Format` constant

## Return Values

Resource

## Examples

**Underline style example**

```php


<?php
$config = [
    'path' => './tests'
];

$excel = new \Vtiful\Kernel\Excel($config);
$excel->fileName('tutorial01.xlsx');

$format = new \Vtiful\Kernel\Format($excel->getHandle());
$underlineStyle = $format->underline(\Vtiful\Kernel\Format::UNDERLINE_SINGLE)->toResource();

$excel->header(['name', 'age'])
    ->data([['viest', 21]])
    ->setColumn('A:A', 200, $underlineStyle)
    ->output();
?>

   
```
