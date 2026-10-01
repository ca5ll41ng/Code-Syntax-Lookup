---
id: "en-php-function-vtiful-kernel-format-italic"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Format::italic"
title: "Vtiful\\Kernel\\Format italic"
signature: "public Vtiful\\Kernel\\Format::italic(resource $handle)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-format.italic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Format italic

## Description

```php
public Vtiful\Kernel\Format::italic(resource $handle)
```

`Vtiful\Kernel\Format` italic format

## Parameters

- **`$handle`** — xlsx file handle

## Return Values

Resource

## Examples

**Italic style example**

```php


<?php
$config = [
    'path' => './tests'
];

$excel = new \Vtiful\Kernel\Excel($config);
$excel->fileName('tutorial01.xlsx');

$format = new \Vtiful\Kernel\Format($excel->getHandle());
$italicStyle = $format->italic()->toResource();

$excel->header(['name', 'age'])
    ->data([['viest', 21]])
    ->setColumn('A:A', 200, $italicStyle)
    ->output();
?>

   
```
