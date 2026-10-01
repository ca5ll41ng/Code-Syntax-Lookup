---
id: "zh-php-function-imagick-readimageblob"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::readImageBlob"
title: "从二进制字符串里读取图片"
signature: "public bool Imagick::readImageBlob(string $image, [string $filename = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.readimageblob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从二进制字符串里读取图片

## 说明

```php
public bool Imagick::readImageBlob(string $image, [string $filename = ...])
```

从二进制字符串里读取图片

## 参数

- **`$image`**

## 返回值

成功时返回 `true`。

## 错误／异常

错误时抛出 ImagickException。

## 示例

**`Imagick::readImageBlob()`**

```php

                    
<?php
function readImageBlob() {
    $base64 = "iVBORw0KGgoAAAANSUhEUgAAAM0AAAD
 NCAMAAAAsYgRbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5c
 cllPAAAABJQTFRF3NSmzMewPxIG//ncJEJsldTou1jHgAAAARBJREFUeNrs2EEK
 gCAQBVDLuv+V20dENbMY831wKz4Y/VHb/5RGQ0NDQ0NDQ0NDQ0NDQ0NDQ
 0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0PzMWtyaGhoaGhoaGhoaGhoaGhoxtb0QGho
 aGhoaGhoaGhoaGhoaMbRLEvv50VTQ9OTQ5OpyZ01GpM2g0bfmDQaL7S+ofFC6x
 v3ZpxJiywakzbvd9r3RWPS9I2+MWk0+kbf0Hih9Y17U0nTHibrDDQ0NDQ0NDQ0
 NDQ0NDQ0NTXbRSL/AK72o6GhoaGhoRlL8951vwsNDQ0NDQ1NDc0WyHtDTEhD
 Q0NDQ0NTS5MdGhoaGhoaGhoaGhoaGhoaGhoaGhoaGposzSHAAErMwwQ2HwRQ
 AAAAAElFTkSuQmCC";

    $imageBlob = base64_decode($base64);

    $imagick = new Imagick();
    $imagick->readImageBlob($imageBlob);

    header("Content-Type: image/png");
    echo $imagick;
}

?>

                
```
