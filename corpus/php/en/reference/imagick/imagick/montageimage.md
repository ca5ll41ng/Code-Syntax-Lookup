---
id: "en-php-function-imagick-montageimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::montageImage"
title: "Creates a composite image"
signature: "public Imagick Imagick::montageImage(ImagickDraw $draw, string $tile_geometry, string $thumbnail_geometry, int $mode, string $frame)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.montageimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a composite image

## Description

```php
public Imagick Imagick::montageImage(ImagickDraw $draw, string $tile_geometry, string $thumbnail_geometry, int $mode, string $frame)
```

Creates a composite image by combining several separate images. The images are tiled on the composite image with the name of the image optionally appearing just below the individual tile.

## Parameters

- **`$draw`** — The font name, size, and color are obtained from this object.
- **`$tile_geometry`** — The number of tiles per row and page (e.g. 6x4+0+0).
- **`$thumbnail_geometry`** — Preferred image size and border size of each thumbnail (e.g. 120x120+4+3).
- **`$mode`** — Thumbnail framing mode, see Montage Mode constants.
- **`$frame`** — Surround the image with an ornamental border (e.g. 15x15+3+3). The frame color is that of the thumbnail's matte color.

## Return Values

Creates a composite image and returns it as a new `Imagick` object.
