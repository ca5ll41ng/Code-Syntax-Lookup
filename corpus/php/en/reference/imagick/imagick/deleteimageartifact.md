---
id: "en-php-function-imagick-deleteimageartifact"
language: "php"
lang: "en"
category: "function"
name: "Imagick::deleteImageArtifact"
title: "Delete image artifact"
signature: "public bool Imagick::deleteImageArtifact(string $artifact)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.deleteimageartifact.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete image artifact

## Description

```php
public bool Imagick::deleteImageArtifact(string $artifact)
```

Deletes an artifact associated with the image. The difference between image properties and image artifacts is that properties are public and artifacts are private. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

## Parameters

- **`$artifact`** — The name of the artifact to delete

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## See Also

`Imagick::setImageArtifact()` `Imagick::getImageArtifact()`
