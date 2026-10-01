---
id: "en-php-guide-gmagick-examples"
language: "php"
lang: "en"
category: "guide"
name: "gmagick.examples"
title: "Examples"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

The following shows some common Gmagick image operations.

**Gmagick Example**

```php


<?php
//Instantiate a new Gmagick object
$image = new Gmagick('example.jpg');

//Make thumbnail from image loaded. 0 for either axes preserves aspect ratio
$image->thumbnailimage(100, 0);

//Create a border around the image, then simulate how the image will look like as an oil painting
//Notice the chaining of mutator methods which is supported in gmagick
$image->borderimage("yellow", 8, 8)->oilpaintimage(0.3);

//Write the current image at the current state to a file
$image->write('example_thumbnail.jpg');
?>

  
```
