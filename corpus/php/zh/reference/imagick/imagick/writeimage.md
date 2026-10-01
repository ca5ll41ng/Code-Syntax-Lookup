---
id: "zh-php-function-imagick-writeimage"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::writeImage"
title: "把图片写入指定的文件"
signature: "public bool Imagick::writeImage(string $filename = NULL)"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.writeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把图片写入指定的文件

## 说明

```php
public bool Imagick::writeImage(string $filename = NULL)
```

把图片写入指定的文件。如果指定文件参数的值是 NULL ，图片将会写入通过 Imagick::readImage() 或者 Imagick::setImageFilename() 设定的文件。

## 参数

- **`$filename`** — 图片将被写入的文件名。文件的后缀指定了文件的类型。 可以强制指定图片的格式而不管文件的后缀名。在文件名前面加上一个前缀，例如 “jpg:test.png”。

## 返回值

成功时返回 `true`。
