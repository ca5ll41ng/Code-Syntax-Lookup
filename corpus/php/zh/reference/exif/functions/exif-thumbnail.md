---
id: "zh-php-function-function-exif-thumbnail"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"source"}
name: "exif_thumbnail"
title: "检索图像的嵌入式缩略图"
signature: "string|false exif_thumbnail(resource|string $file, int $width = null, int $height = null, int $image_type = null)"
module: "exif"
source_url: "https://www.php.net/manual/zh/function.exif-thumbnail.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 检索图像的嵌入式缩略图

## 说明

```php
string|false exif_thumbnail(resource|string $file, int $width = null, int $height = null, int $image_type = null)
```

`exif_thumbnail()` 读取图像的嵌入式缩略图。

如果想通过该函数发送缩略图，应该使用 `header()` 函数发送 mimetype 信息。

`exif_thumbnail()` 不能创建图像但能确定它的尺寸。在这种情况下，返回值是 `false`，但会设置 `$width` 和 `$height`。

## 参数

- **`$file`** — 图像文件的路径。可以是文件路径也可以是流 `resource`。
- **`$width`** — 返回缩略图的宽度。
- **`$height`** — 返回缩略图的高度。
- **`$image_type`** — 返回缩略图的图像类型。不是 TIFF 就是 JPEG。

## 返回值

返回嵌入式缩略图，如果图像不包含缩略图则返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | `$file` 参数现在支持本地文件和流资源。 |

## 示例

**`exif_thumbnail()` 示例**

```php


<?php
$image = exif_thumbnail('/path/to/image.jpg', $width, $height, $type);

if ($image!==false) {
    header('Content-type: ' .image_type_to_mime_type($type));
    echo $image;
    exit;
} else {
    // 没有可用的缩略图，这里处理错误
    echo 'No thumbnail available';
}
?>

    
```

## 注释

> 如果传递流到此函数的 `$file`，然后流必须是可寻找的。请注意，此函数返回后，文件指针位置不会改变。

## 参见

 `exif_read_data()` `image_type_to_mime_type()`
