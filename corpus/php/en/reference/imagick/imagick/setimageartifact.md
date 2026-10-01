---
id: "en-php-function-imagick-setimageartifact"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageArtifact"
title: "Set image artifact"
signature: "public bool Imagick::setImageArtifact(string $artifact, string $value)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageartifact.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set image artifact

## Description

```php
public bool Imagick::setImageArtifact(string $artifact, string $value)
```

Associates an artifact with the image. The difference between image properties and image artifacts is that properties are public and artifacts are private. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

## Parameters

- **`$artifact`** — The name of the artifact
- **`$value`** — The value of the artifact

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::setImageArtifact()`**

```php

      
<?php
function setImageArtifact() {

    $src1 = new \Imagick(realpath("./images/artifact/source1.png"));
    $src2 = new \Imagick(realpath("./images/artifact/source2.png"));

    $src2->setImageVirtualPixelMethod(\Imagick::VIRTUALPIXELMETHOD_TRANSPARENT);
    $src2->setImageArtifact('compose:args', "1,0,-0.5,0.5");
    $src1->compositeImage($src2, Imagick::COMPOSITE_MATHEMATICS, 0, 0);
    
    $src1->setImageFormat('png');
    header("Content-Type: image/png");
    echo $src1->getImagesBlob();
}

?>

      
```

## See Also

`Imagick::getImageArtifact()` `Imagick::deleteImageArtifact()`
