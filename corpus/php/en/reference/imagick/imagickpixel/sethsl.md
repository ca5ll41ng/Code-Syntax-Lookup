---
id: "en-php-function-imagickpixel-sethsl"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::setHSL"
title: "Sets the normalized HSL color"
signature: "public bool ImagickPixel::setHSL(float $hue, float $saturation, float $luminosity)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.sethsl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the normalized HSL color

## Description

```php
public bool ImagickPixel::setHSL(float $hue, float $saturation, float $luminosity)
```

Sets the color described by the ImagickPixel object using normalized values for hue, saturation and luminosity.

## Parameters

- **`$hue`** — The normalized value for hue, described as a fractional arc (between 0 and 1) of the hue circle, where the zero value is red.
- **`$saturation`** — The normalized value for saturation, with 1 as full saturation.
- **`$luminosity`** — The normalized value for luminosity, on a scale from black at 0 to white at 1, with the full HS value at 0.5 luminosity.

## Return Values

Returns `true` on success.

## Examples

**Use `ImagickPixel::setHSL()` to modify a color**

```php

        
<?php

//Create an almost pure red color
$color = new ImagickPixel('rgb(90%, 10%, 10%)');

//Get it's HSL values
$colorInfo = $color->getHSL();

//Rotate the hue by 180 degrees
$newHue = $colorInfo['hue'] + 0.5;
if ($newHue > 1) {
    $newHue = $newHue - 1;
}

//Set the ImagickPixel to the new color
$colorInfo = $color->setHSL($newHue, $colorInfo['saturation'], $colorInfo['luminosity']);

//Check that the new color is blue/green
$colorInfo = $color->getcolor();
print_r($colorInfo);

?>
        
    
```

The above example will output:

```text


Array
(
    [r] => 26
    [g] => 230
    [b] => 230
    [a] => 255
)

    
```

## Notes

> Available with ImageMagick library version 6.2.9 and higher.
