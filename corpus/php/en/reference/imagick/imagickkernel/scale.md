---
id: "en-php-function-imagickkernel-scale"
language: "php"
lang: "en"
category: "function"
name: "ImagickKernel::scale"
title: "Scales a kernel list by the given amount"
signature: "public void ImagickKernel::scale(float $scale, [int $normalizeFlag = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickkernel.scale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales a kernel list by the given amount

## Description

```php
public void ImagickKernel::scale(float $scale, [int $normalizeFlag = ...])
```

Scales the given kernel list by the given amount, with or without normalization of the sum of the kernel values (as per given flags). The exact behaviour of this function depends on the normalization type being used please see http://www.imagemagick.org/api/morphology.php#ScaleKernelInfo for details.

## Parameters

- **`$scale`**
- **`$normalizeFlag`** — Imagick::NORMALIZE_KERNEL_NONE Imagick::NORMALIZE_KERNEL_VALUE Imagick::NORMALIZE_KERNEL_CORRELATE Imagick::NORMALIZE_KERNEL_PERCENT

## Return Values

## Examples

**`ImagickKernel::scale()`**

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


    $output = "";
    
    $matrix = [
        [-1, 0, -1],
        [ 0, 4,  0],
        [-1, 0, -1],
    ];

    $kernel = \ImagickKernel::fromMatrix($matrix);
    $kernelClone = clone $kernel;

    $output .= "Start kernel<br/>";
    $output .= renderKernelTable($kernel->getMatrix());
    
    
    $output .= "Scaling with NORMALIZE_KERNEL_VALUE. The  <br/>";
    $kernel->scale(2, \Imagick::NORMALIZE_KERNEL_VALUE);
    $output .= renderKernelTable($kernel->getMatrix());


    $kernel = clone $kernelClone;
    $output .= "Scaling by percent<br/>";
    $kernel->scale(2, \Imagick::NORMALIZE_KERNEL_PERCENT);
    $output .= renderKernelTable($kernel->getMatrix());
    
    $matrix2 = [
        [-1, -1, 1],
        [ -1, false,  1],
        [1, 1, 1],
    ];
    
    $kernel = \ImagickKernel::fromMatrix($matrix2);
    $output .= "Scaling by correlate<br/>";
    $kernel->scale(1, \Imagick::NORMALIZE_KERNEL_CORRELATE);
    $output .= renderKernelTable($kernel->getMatrix());

    return $output; 
?>

      
```
