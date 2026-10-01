---
id: "en-php-function-imagickkernel-separate"
language: "php"
lang: "en"
category: "function"
name: "ImagickKernel::separate"
title: "Separates a linked set of kernels and returns an array of ImagickKernels"
signature: "public array ImagickKernel::separate()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickkernel.separate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Separates a linked set of kernels and returns an array of ImagickKernels

## Description

```php
public array ImagickKernel::separate()
```

Separates a linked set of kernels and returns an array of ImagickKernels.

## Parameters

This function has no parameters.

## Return Values

## Examples

**`ImagickKernel::separate()`**

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


    $matrix = [
        [-1, 0, -1],
        [ 0, 4,  0],
        [-1, 0, -1],
    ];

    $kernel = \ImagickKernel::fromMatrix($matrix);
    $kernel->scale(4, \Imagick::NORMALIZE_KERNEL_VALUE);
    $diamondKernel = \ImagickKernel::fromBuiltIn(
        \Imagick::KERNEL_DIAMOND,
        "2"
    );

    $kernel->addKernel($diamondKernel);
    
    $kernelList = $kernel->separate();
    
    $output = '';
    $count = 0;
    foreach ($kernelList as $kernel) {
        $output .= "<br/>Kernel $count<br/>";
        $output .= renderKernelTable($kernel->getMatrix());
        $count++;
    }

    return $output;

?>

      
```
