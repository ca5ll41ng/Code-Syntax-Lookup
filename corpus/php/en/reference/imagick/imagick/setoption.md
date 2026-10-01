---
id: "en-php-function-imagick-setoption"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setOption"
title: "Set an option"
signature: "public bool Imagick::setOption(string $key, string $value)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setoption.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set an option

## Description

```php
public bool Imagick::setOption(string $key, string $value)
```

Associates one or more options with the wand.

## Parameters

- **`$key`**
- **`$value`**

## Return Values

Returns `true` on success.

## Examples

**Attempt to reach '$extent' size`Imagick::setOption()`**

```php

      
<?php
    function renderJPG($extent) {
        $imagePath = $this->control->getImagePath();
        $imagick = new \Imagick(realpath($imagePath));
        $imagick->setImageFormat('jpg');
        $imagick->setOption('jpeg:extent', $extent);
        header("Content-Type: image/jpg");
        echo $imagick->getImageBlob();
    }

?>

      
```

**`Imagick::setOption()`**

```php

      
<?php
    function renderPNG($imagePath, $format) {

        $imagick = new \Imagick(realpath($imagePath));
        $imagick->setImageFormat('png');
        $imagick->setOption('png:format', $format);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }
    
    //Save as 64bit PNG.
    renderPNG($imagePath, 'png64');

?>

      
```

**`Imagick::setOption()`**

```php

      
<?php
    function renderCustomBitDepthPNG() {
        $imagePath = $this->control->getImagePath();
        $imagick = new \Imagick(realpath($imagePath));
        $imagick->setImageFormat('png');
        
        $imagick->setOption('png:bit-depth', '16');
        $imagick->setOption('png:color-type', 6);
        header("Content-Type: image/png");
        $crash = true;
        if ($crash) {
            echo $imagick->getImageBlob();
        }
        else {
            $tempFilename = tempnam('./', 'imagick');
            $imagick->writeimage(realpath($tempFilename));
            echo file_get_contents($tempFilename);
        }
    }

?>

      
```
