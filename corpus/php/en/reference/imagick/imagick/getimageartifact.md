---
id: "en-php-function-imagick-getimageartifact"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageArtifact"
title: "Get image artifact"
signature: "public string Imagick::getImageArtifact(string $artifact)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageartifact.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get image artifact

## Description

```php
public string Imagick::getImageArtifact(string $artifact)
```

Gets an artifact associated with the image. The difference between image properties and image artifacts is that properties are public and artifacts are private. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

## Parameters

- **`$artifact`** — The name of the artifact

## Return Values

Returns the artifact value on success.

## Errors/Exceptions

Throws ImagickException on error.

## See Also

`Imagick::setImageArtifact()` `Imagick::deleteImageArtifact()`
