---
id: "en-php-function-vtiful-kernel-format-bold"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Format::bold"
title: "Vtiful\\Kernel\\Format bold"
signature: "public Vtiful\\Kernel\\Format::bold(resource $handle)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-format.bold.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Format bold

## Description

```php
public Vtiful\Kernel\Format::bold(resource $handle)
```

`Vtiful\Kernel\Format` bold format

## Parameters

- **`$handle`** — xlsx file handle

## Return Values

Resource

## Examples

**Bold style example**

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
?>

   
```
