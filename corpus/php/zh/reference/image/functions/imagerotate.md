---
id: "zh-php-function-function-imagerotate"
language: "php"
lang: "zh"
category: "function"
name: "imagerotate"
title: "用给定角度旋转图像"
signature: "GdImage|false imagerotate(GdImage $image, float $angle, int $background_color)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagerotate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用给定角度旋转图像

## 说明

```php
GdImage|false imagerotate(GdImage $image, float $angle, int $background_color)
```

将 `$image` 图像按指定 `$angle` 角度旋转。

旋转的中心是图像的中心，旋转后的图像可能与原始图像具有不同的尺寸。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$angle`** — 旋转角度，以度为单位。旋转角度是为逆时针旋转图像的度数。
- **`$background_color`** — 指定旋转后未覆盖区域的颜色

## 返回值

返回旋转图像后的图像对象， 或者在失败时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.3.0 | 未使用的 `$ignore_transparent` 已完全删除。 |
| 8.0.0 | 成功时此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 8.0.0 | 未使用的 `$ignore_transparent` 现在接受 `bool`；之前接受 `int`。 |

## 示例

**图像旋转 180 度**

示例把图像旋转 180 度——上下颠倒。

```php


<?php
// 文件和旋转角度
$filename = 'test.jpg';
$degrees = 180;

// 内容类型
header('Content-type: image/jpeg');

// 加载
$source = imagecreatefromjpeg($filename);

// 旋转
$rotate = imagerotate($source, $degrees, 0);

// 输出
imagejpeg($rotate);
?>

    
```

以上示例的输出类似于：

## 注释

> 此函数受到 `imagesetinterpolation()` 中设定的插值方法影响。

## 参见

 `imagesetinterpolation()`
