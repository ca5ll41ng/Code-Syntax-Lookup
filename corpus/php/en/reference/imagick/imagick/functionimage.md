---
id: "en-php-function-imagick-functionimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::functionImage"
title: "Applies a function on the image"
signature: "public bool Imagick::functionImage(int $function, array $arguments, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.functionimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a function on the image

## Description

```php
public bool Imagick::functionImage(int $function, array $arguments, int $channel = Imagick::CHANNEL_DEFAULT)
```

Applies an arithmetic, relational, or logical expression to a pseudo image.

See also [ImageMagick v6 Examples - Image Transformations — Function, Multi-Argument Evaluate]()

This method is available if Imagick has been compiled against ImageMagick version 6.4.9 or newer.

## Parameters

- **`$function`** — Refer to this list of function constants
- **`$arguments`** — Array of arguments to pass to this function.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Create a sinusoidal gradient**

```php


<?php
$imagick = new Imagick();
$imagick->newPseudoImage(200, 200, 'gradient:black-white');
$arguments = array(3, -90);
$imagick->functionImage(Imagick::FUNCTION_SINUSOID, $arguments);

header("Content-Type: image/png");
$imagick->setImageFormat("png");
echo $imagick->getImageBlob();
?>

    
```

The above example will output something similar to:

**Create a gradient from the polynomial (4x^2 - 4x + 1)**

```php


<?php
$imagick = new Imagick();
$imagick->newPseudoImage(200, 200, 'gradient:black-white');
$arguments = array(4, -4, 1);
$imagick->functionImage(Imagick::FUNCTION_POLYNOMIAL, $arguments);

header("Content-Type: image/png");
$imagick->setimageformat("png");
echo $imagick->getImageBlob();
?>

    
```

The above example will output something similar to:

**Create a complex gradient from the polynomial (4x^2 - 4x^2 + 1) modulated by a sinusoidal gradient**

```php


<?php
$imagick1 = new Imagick();
$imagick1->newPseudoImage(200, 200, 'gradient:black-white');
$arguments = array(9, -90);
$imagick1->functionImage(Imagick::FUNCTION_SINUSOID, $arguments);

$imagick2 = new Imagick();
$imagick2->newPseudoImage(200, 200, 'gradient:black-white');
$arguments = array(0.5, 0);
$imagick2->functionImage(Imagick::FUNCTION_SINUSOID, $arguments);
$imagick1->compositeimage($imagick2, Imagick::COMPOSITE_MULTIPLY, 0, 0);

header("Content-Type: image/png");
$imagick1->setImageFormat("png");
echo $imagick1->getImageBlob();
?>

    
```

The above example will output something similar to:
