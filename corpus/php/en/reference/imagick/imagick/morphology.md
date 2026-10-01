---
id: "en-php-function-imagick-morphology"
language: "php"
lang: "en"
category: "function"
name: "Imagick::morphology"
title: "Applies a user supplied kernel to the image according to the given morphology method."
signature: "public bool Imagick::morphology(int $morphologyMethod, int $iterations, ImagickKernel $ImagickKernel, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.morphology.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a user supplied kernel to the image according to the given morphology method.

## Description

```php
public bool Imagick::morphology(int $morphologyMethod, int $iterations, ImagickKernel $ImagickKernel, int $channel = Imagick::CHANNEL_DEFAULT)
```

Applies a user supplied kernel to the image according to the given morphology method.

## Parameters

- **`$morphologyMethod`** — Which morphology method to use one of the \Imagick::MORPHOLOGY_* constants.
- **`$iterations`** — The number of iteration to apply the morphology function. A value of -1 means loop until no change found. How this is applied may depend on the morphology method. Typically this is a value of 1.
- **`$ImagickKernel`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Examples

**Convolve `Imagick::morphology()`**

```php

      
<?php
        $imagick = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_GAUSSIAN, "5,1");
        $imagick->morphology(\Imagick::MORPHOLOGY_CONVOLVE, 2, $kernel);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();

?>

      
```

**Correlate `Imagick::morphology()`**

```php

      
<?php

        // Top-left pixel must be black
        // Bottom right pixel must be white
        // We don't care about the rest.
        

        $imagick = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromMatrix(self::$correlateMatrix, [2, 2]);
        $imagick->morphology(\Imagick::MORPHOLOGY_CORRELATE, 1, $kernel);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();

?>

      
```

**Erode `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_ERODE, 2, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Erode Intensity `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "1");
        $canvas->morphology(\Imagick::MORPHOLOGY_ERODE_INTENSITY, 2, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Dilate `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_DILATE, 4, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Dilate intensity `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "1");
        $canvas->morphology(\Imagick::MORPHOLOGY_DILATE_INTENSITY, 4, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Distance with Chebyshev kernel `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_CHEBYSHEV, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Distance with Manhattan kernel `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_MANHATTAN, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Distance with ocatagonal kernel `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGONAL, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Distance with Euclidean kernel `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_EUCLIDEAN, "4");
        $canvas->morphology(\Imagick::MORPHOLOGY_DISTANCE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Edge `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_EDGE, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Open `Imagick::morphology()`**

```php

      
<?php
        // As a result you will see that 'Open' smoothed the outline, by rounding off any sharp points, and remove any parts that is smaller than the shape used. It will also disconnect or 'open' any thin bridges.
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_OPEN, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Open intensity `Imagick::morphology()`**

```php

      
<?php
        // As a result you will see that 'Open' smoothed the outline, by rounding off any sharp points, and remove any parts that is smaller than the shape used. It will also disconnect or 'open' any thin bridges.

        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_OPEN_INTENSITY, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Close `Imagick::morphology()`**

```php

      
<?php
        //The basic use of the 'Close' method is to reduce or remove any 'holes' or 'gaps' about the size of the kernel 'Structure Element'. That is 'close' parts of the background that are about that size.
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Close Intensity `Imagick::morphology()`**

```php

      
<?php
        //The basic use of the 'Close' method is to reduce or remove any 'holes' or 'gaps' about the size of the kernel 'Structure Element'. That is 'close' parts of the background that are about that size.
        $canvas = $this->getCharacter();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "6");
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE_INTENSITY, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Smooth `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_SMOOTH, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Edge in `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_EDGE_IN, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Edge out `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_OCTAGON, "3");
        $canvas->morphology(\Imagick::MORPHOLOGY_EDGE_OUT, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**The 'TopHat' method, or more specifically 'White Top Hat', returns the pixels that were removed by a Opening of the shape, that is the pixels that were removed to round off the points, and the connecting bridged between shapes. `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_TOP_HAT, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**The 'BottomHat' method, also known as 'Black TopHat' is the pixels that a Closing of the shape adds to the image. That is the pixels that were used to fill in the 'holes', 'gaps', and 'bridges'. `Imagick::morphology()`**

```php

      
<?php

        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "5");
        $canvas->morphology(\Imagick::MORPHOLOGY_BOTTOM_HAT, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Hit and Miss `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        //This finds all the pixels with 3 pixels of the right edge
        $matrix = [[1, false, false, 0]];
        $kernel = \ImagickKernel::fromMatrix(
            $matrix,
            [0, 0]
        );
        $canvas->morphology(\Imagick::MORPHOLOGY_HIT_AND_MISS, 1, $kernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Thinning `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $leftEdgeKernel = \ImagickKernel::fromMatrix([[0, 1]], [1, 0]);
        $rightEdgeKernel = \ImagickKernel::fromMatrix([[1, 0]], [0, 0]);
        $leftEdgeKernel->addKernel($rightEdgeKernel);
        
        $canvas->morphology(\Imagick::MORPHOLOGY_THINNING, 3, $leftEdgeKernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Thicken `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $leftEdgeKernel = \ImagickKernel::fromMatrix([[0, 1]], [1, 0]);
        $rightEdgeKernel = \ImagickKernel::fromMatrix([[1, 0]], [0, 0]);
        $leftEdgeKernel->addKernel($rightEdgeKernel);

        $canvas->morphology(\Imagick::MORPHOLOGY_THICKEN, 3, $leftEdgeKernel);
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Thick to generate a convex hull `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $diamondKernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DIAMOND, "1");
        $convexKernel =  \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_CONVEX_HULL, "");

        // The thicken morphology doesn't handle small gaps. We close them
        // with the close morphology.
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $diamondKernel);
        $canvas->morphology(\Imagick::MORPHOLOGY_THICKEN, -1, $convexKernel);
        $canvas->morphology(\Imagick::MORPHOLOGY_CLOSE, 1, $diamondKernel);

        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Iterative morphology `Imagick::morphology()`**

```php

      
<?php
        $canvas = $this->getCharacterOutline();
        $kernel = \ImagickKernel::fromBuiltIn(\Imagick::KERNEL_DISK, "2");        
        $canvas->morphology(\Imagick::MORPHOLOGY_ITERATIVE, 3, $kernel);
        $canvas->autoLevelImage();
        header("Content-Type: image/png");
        echo $canvas->getImageBlob();

?>

      
```

**Helper function to get an image silhouette `Imagick::morphology()`**

```php


<?php
function getCharacterOutline() {
    $imagick = new \Imagick(realpath("./images/character.png"));
    $character = new \Imagick();
    $character->newPseudoImage(
        $imagick->getImageWidth(),
        $imagick->getImageHeight(),
        "canvas:white"
    );
    $canvas = new \Imagick();
    $canvas->newPseudoImage(
        $imagick->getImageWidth(),
        $imagick->getImageHeight(),
        "canvas:black"
    );

    $character->compositeimage(
        $imagick,
        \Imagick::COMPOSITE_COPYOPACITY,
        0, 0
    );
    $canvas->compositeimage(
        $character,
        \Imagick::COMPOSITE_ATOP,
        0, 0
    );
    $canvas->setFormat('png');

    return $canvas;
}
?>

      
```
