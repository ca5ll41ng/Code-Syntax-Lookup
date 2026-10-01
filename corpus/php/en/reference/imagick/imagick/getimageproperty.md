---
id: "en-php-function-imagick-getimageproperty"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageProperty"
title: "Returns the named image property"
signature: "public string Imagick::getImageProperty(string $name)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageproperty.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the named image property

## Description

```php
public string Imagick::getImageProperty(string $name)
```

Returns the named image property. This method is available if Imagick has been compiled against ImageMagick version 6.3.2 or newer.

## Parameters

- **`$name`** — name of the property (for example Exif:DateTime)

## Return Values

Returns a string containing the image property, false if a property with the given name does not exist.

## Examples

**Using `Imagick::getImageProperty()`:**

Setting and getting image property

```php


<?php
$image = new Imagick();
$image->newImage(300, 200, "black");

$image->setImageProperty('Exif:Make', 'Imagick');
echo $image->getImageProperty('Exif:Make');
?>

    
```

## See Also

`Imagick::setImageProperty()`
