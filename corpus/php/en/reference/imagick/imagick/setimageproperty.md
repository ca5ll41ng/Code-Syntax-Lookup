---
id: "en-php-function-imagick-setimageproperty"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageProperty"
title: "Sets an image property"
signature: "public bool Imagick::setImageProperty(string $name, string $value)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets an image property

## Description

```php
public bool Imagick::setImageProperty(string $name, string $value)
```

Sets a named property to the image. This method is available if Imagick has been compiled against ImageMagick version 6.3.2 or newer.

## Parameters

- **`$name`**
- **`$value`**

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::setImageProperty()`:**

Setting and getting image properties

```php


<?php
$image = new Imagick();
$image->newImage(300, 200, "black");

$image->setImageProperty('Exif:Make', 'Imagick');
echo $image->getImageProperty('Exif:Make');
?>

    
```

## See Also

`Imagick::getImageProperty()`
