---
id: "zh-php-function-function-imagewbmp"
language: "php"
lang: "zh"
category: "function"
name: "imagewbmp"
title: "输出图象到浏览器或文件。"
signature: "bool imagewbmp(GdImage $image, resource|string|null $file = null, int|null $foreground_color = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagewbmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 输出图象到浏览器或文件。

## 说明

```php
bool imagewbmp(GdImage $image, resource|string|null $file = null, int|null $foreground_color = null)
```

`imagewbmp()` 输出或保存为指定 `$image` 的 WBMP 版本。

## 参数

- **`$image`** — 由图象创建函数(例如`imagecreatetruecolor()`)返回的 `GdImage` 对象。
- **`$file`** — 文件保存的路径或者已打开的流资源（此方法返回后自动关闭该流资源），如果未设置或为 `null`，将会直接输出原始图象流。
- **`$foreground_color`** — 使用此参数从 `imagecolorallocate()` 获得的标识符来设置前景色。默认前景色为黑色。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

> 如果 libgd 输出图像失败，函数会返回 `true`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `$image` 现在需要 `GdImage` 实例；之前需要有效的 `gd` `resource`。 |
| 8.0.0 | `$foreground_color` 现在允许为 null。 |

## 示例

**输出 WBMP 图像**

```php


<?php
// 创建空白图像并添加文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 设置内容类型标头——在本例中是 image/vnd.wap.wbmp
// 提示，请参阅 image_type_to_mime_type() 了解内容类型
header('Content-Type: image/vnd.wap.wbmp');

// 输出图像
imagewbmp($im);
?>

    
```

**保存 WBMP 图像**

```php


<?php
// 创建空白图像并添加文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 保存图像
imagewbmp($im, 'simpletext.wbmp');
?>

    
```

**使用不同的前景色输出图像**

```php


<?php
// 创建空白图像并添加文本
$im = imagecreatetruecolor(120, 20);
$text_color = imagecolorallocate($im, 233, 14, 91);
imagestring($im, 1, 5, 5,  'A Simple Text String', $text_color);

// 设置内容类型标头——在本例中是 image/vnd.wap.wbmp
// 提示，请参阅 image_type_to_mime_type() 了解内容类型
header('Content-Type: image/vnd.wap.wbmp');

// 设置替换的前景色
$foreground_color = imagecolorallocate($im, 255, 0, 0);

imagewbmp($im, NULL, $foreground_color);
?>

    
```

## 参见

 `image2wbmp()` `imagepng()` `imagegif()` `imagejpeg()` `imagetypes()`
