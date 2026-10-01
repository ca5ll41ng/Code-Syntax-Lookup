---
id: "en-php-function-imagick-shaveimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::shaveImage"
title: "Shaves pixels from the image edges"
signature: "public bool Imagick::shaveImage(int $columns, int $rows)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.shaveimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Shaves pixels from the image edges

## Description

```php
public bool Imagick::shaveImage(int $columns, int $rows)
```

Shaves pixels from the image edges. It allocates the memory necessary for the new Image structure and returns a pointer to the new image.

## Parameters

- **`$columns`**
- **`$rows`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::shaveImage()`**

```php

      
<?php
function shaveImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->shaveImage(100, 50);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
