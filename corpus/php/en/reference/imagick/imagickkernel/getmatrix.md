---
id: "en-php-function-imagickkernel-getmatrix"
language: "php"
lang: "en"
category: "function"
name: "ImagickKernel::getMatrix"
title: "Get the 2d matrix of values used in this kernel"
signature: "public array ImagickKernel::getMatrix()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickkernel.getmatrix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the 2d matrix of values used in this kernel

## Description

```php
public array ImagickKernel::getMatrix()
```

Get the 2d matrix of values used in this kernel. The elements are either float for elements that are used or 'false' if the element should be skipped.

## Parameters

This function has no parameters.

## Return Values

A matrix (2d array) of the values that represent the kernel.

## Examples

**`ImagickKernel::getMatrix()`**

```php

      
<?php


function renderKernelTable($matrix) {
    $output = "<table class='infoTable'>";

    foreach ($matrix as $row) {
        $output .= "<tr>";
        foreach ($row as $cell) {
            $output .= "<td style='text-align:left'>";
            if ($cell === false) {
                $output .= "false";
            }
            else {
                $output .= round($cell, 3);
            }
            $output .= "</td>";
        }
        $output .= "</tr>";
    }

    $output .= "</table>";

    return $output;
}

    $output = "The built-in kernel name 'ring' with parameters of '2,3.5':<br/>";
    $kernel = \ImagickKernel::fromBuiltIn(
        \Imagick::KERNEL_RING,
        "2,3.5"
    );
    $matrix = $kernel->getMatrix();
    $output .= renderKernelTable($matrix);

    echo $output;

?>

      
```
