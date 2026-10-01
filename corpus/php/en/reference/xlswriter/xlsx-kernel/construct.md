---
id: "en-php-function-vtiful-kernel-excel-construct"
language: "php"
lang: "en"
category: "function"
name: "Vtiful\\Kernel\\Excel::__construct"
title: "Vtiful\\Kernel\\Excel constructor"
signature: "public Vtiful\\Kernel\\Excel::__construct(array $config)"
module: "xlswriter"
source_url: "https://www.php.net/manual/en/vtiful-kernel-excel.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Vtiful\Kernel\Excel constructor

## Description

```php
public Vtiful\Kernel\Excel::__construct(array $config)
```

`Vtiful\Kernel\Excel` constructor, create a class object.

## Parameters

- **`$config`** — XLSX file export configuration

## Examples

**example**

```php


<?php
$config = [
  'path' => '/home/viest'
];

$excelObject = new \Vtiful\Kernel\Excel($config);
?>

   
```
