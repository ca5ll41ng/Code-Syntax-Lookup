---
id: "zh-php-function-imagick-compositeimage"
language: "php"
lang: "zh"
category: "function"
name: "Imagick::compositeImage"
title: "把一张图合并到一张图"
signature: "public bool Imagick::compositeImage(Imagick $composite_object, int $composite, int $x, int $y, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/zh/imagick.compositeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把一张图合并到一张图

## 说明

```php
public bool Imagick::compositeImage(Imagick $composite_object, int $composite, int $x, int $y, int $channel = Imagick::CHANNEL_DEFAULT)
```

以指定的偏移量（offset）将一幅图像合成到另一幅图像上。组合算法所需的任何额外参数都应传递给 setImageArtifact，其中“compose:args”作为第一个参数，数据作为第二个参数。

## 参数

- **`$composite_object`** — 用于合并的图片的Imagick对象
- **`$composite`** — 合并操作，定义操作常量。 具体请查看 合并操作常量列表
- **`$x`** — 相对图像顶点左上位置（0,0）的横坐标
- **`$y`** — 相对图像顶点左上位置（0,0）的纵坐标
- **`$channel`** — 通过传入一个通道常量，来开启通道模式。为了支持多个通道，可以通过二进制运算的操作来合并多个通道常量。（Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators）可以参考这个列表 通道常量列表.

## 返回值

成功时返回 `true`。

## 示例

**使用 `Imagick::compositeImage()`:**

使用“mathematics”组合方法合成两个图像

```php


<?php

// 等同于运行命令
// convert src1.png src2.png -compose mathematics -define compose:args="1,0,-0.5,0.5" -composite output.png

$src1 = new \Imagick("./src1.png");
$src2 = new \Imagick("./src2.png");

$src1->setImageVirtualPixelMethod(Imagick::VIRTUALPIXELMETHOD_TRANSPARENT);
$src1->setImageArtifact('compose:args', "1,0,-0.5,0.5");
$src1->compositeImage($src2, Imagick::COMPOSITE_MATHEMATICS, 0, 0);
$src1->writeImage("./output.png");

?>

    
```

## 参见

`Imagick::setImageArtifact()`
