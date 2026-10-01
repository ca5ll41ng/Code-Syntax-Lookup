---
id: "en-php-function-function-imagepalettetotruecolor"
language: "php"
lang: "en"
category: "function"
name: "imagepalettetotruecolor"
title: "Converts a palette based image to true color"
signature: "bool imagepalettetotruecolor(GdImage $image)"
module: "image"
source_url: "https://www.php.net/manual/en/function.imagepalettetotruecolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Converts a palette based image to true color

## Description

```php
bool imagepalettetotruecolor(GdImage $image)
```

Converts a palette based image, created by functions like `imagecreate()` to a true color image, like `imagecreatetruecolor()`.

## Parameters

- **`$image`** — A `GdImage` object, returned by one of the image creation functions, such as `imagecreatetruecolor()`.

## Return Values

Returns `true` if the conversion was complete, or if the source image already is a true color image, otherwise `false` is returned.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | `$image` expects a `GdImage` instance now; previously, a valid `gd` `resource` was expected. |

## Examples

**Converts any image object to true color**

```php


<?php
// Backwards compatibility
if(!function_exists('imagepalettetotruecolor'))
{
    function imagepalettetotruecolor(&$src)
    {
        if(imageistruecolor($src))
        {
            return(true);
        }

        $dst = imagecreatetruecolor(imagesx($src), imagesy($src));

        imagecopy($dst, $src, 0, 0, 0, 0, imagesx($src), imagesy($src));

        $src = $dst;

        return(true);
    }
}

// Helper closure
$typeof = function() use($im)
{
    echo 'typeof($im) = ' . (imageistruecolor($im) ? 'true color' : 'palette'), PHP_EOL;
};

// Create a palette based image
$im = imagecreate(100, 100);
$typeof();

// Convert it to true color
imagepalettetotruecolor($im);
$typeof();
?>

    
```

The above example will output:

```text


typeof($im) = palette
typeof($im) = true color

    
```

## See Also

 `imagecreatetruecolor()` `imageistruecolor()`
