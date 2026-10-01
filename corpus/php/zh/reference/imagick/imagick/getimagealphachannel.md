---
id: "zh-php-function-imagick-getimagealphachannel"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::getImageAlphaChannel"
title: "检查图像是否有 alpha 通道"
signature: "public bool Imagick::getImageAlphaChannel()"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.getimagealphachannel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检查图像是否有 alpha 通道

## 说明

```php
public bool Imagick::getImageAlphaChannel()
```

返回图像是否有 alpha 通道。

## 参数

此函数没有参数。

## 返回值

如果图像具有 alpha 通道值，则返回 `true`，否则返回 `false`，即图像是 RGB 而不是 RGBA 或 CMYK 而不是 CMYKA。

## 错误／异常

错误时抛出 ImagickException。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| PECL imagick 3.6.0 | 现在返回 `boolean`；之前返回 `integer`。 |
