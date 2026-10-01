---
id: "en-php-function-imagickkernel-addkernel"
language: "php"
lang: "en"
category: "function"
name: "ImagickKernel::addKernel"
title: "Attach another kernel to a kernel list"
signature: "public void ImagickKernel::addKernel(ImagickKernel $ImagickKernel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickkernel.addkernel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Attach another kernel to a kernel list

## Description

```php
public void ImagickKernel::addKernel(ImagickKernel $ImagickKernel)
```

Attach another kernel to this kernel to allow them to both be applied in a single morphology or filter function. Returns the new combined kernel.

## Parameters

- **`$ImagickKernel`**

## Return Values

## Examples

**`ImagickKernel::addKernel()`**

```php

      
<?php
function addKernel($imagePath) {
    $matrix1 = [
        [-1, -1, -1],
        [ 0,  0,  0],
        [ 1,  1,  1],
    ];

    $matrix2 = [
        [-1,  0,  1],
        [-1,  0,  1],
        [-1,  0,  1],
    ];

    $kernel1 = ImagickKernel::fromMatrix($matrix1);
    $kernel2 = ImagickKernel::fromMatrix($matrix2);
    $kernel1->addKernel($kernel2);

    $imagick = new \Imagick(realpath($imagePath));
    $imagick->filter($kernel1);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();

}

?>

      
```
