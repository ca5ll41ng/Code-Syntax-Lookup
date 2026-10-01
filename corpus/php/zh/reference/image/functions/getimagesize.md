---
id: "zh-php-function-function-getimagesize"
language: "php"
lang: "zh"
category: "function"
name: "getimagesize"
title: "取得图像大小"
signature: "array|false getimagesize(string $filename, array $image_info = null)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.getimagesize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 取得图像大小

## 说明

```php
array|false getimagesize(string $filename, array $image_info = null)
```

`getimagesize()` 函数将确定任何支持的指定图像文件的大小，并返回尺寸以及文件类型和 `height/width` 文本字符串，以在标准 HTML `<IMG>` 标签和对应的 HTTP 内容类型中使用。

`getimagesize()` 还可以在 `$image_info` 参数中返回更多信息。

> 此函数要求 `$filename` 是有效的图像文件。如果提供的是非图像，可能会错误的识别为图像且函数会成功返回，但数组可能包含无意义的值。
>
> 不要使用 `getimagesize()` 识别指定的文件是否是有效的图像。请使用专业解决方案，比如 Fileinfo 扩展。

> 注意 JPC 和 JP2 是具有不同位深度的组件。此外，JP2 文件可能包含有`多个 JPEG 2000 代码流`，此情况下，`getimagesize()` 返回此文件顶层中碰到的第一个代码流的值。

> 从具有最高比特率的 icon 中检索有关 icon 的信息。

> GIF 图像由一个或多个帧组成，其中每个帧可能只占据图像的一部分。`getimagesize()` 报告的图像大小是整体大小（从逻辑屏幕描述符中读取）。

## 参数

- **`$filename`** — 此参数指定希望检索其信息的文件。可以指向本地文件或（配置允许）使用某个支持的流的远程文件。
- **`$image_info`** — 此可选参数允许从图像文件中提取一些扩展信息。目前会将不同的 JPG APP 标记作为关联数组返回。一些程序使用这些 APP 标记在图像中嵌入文本信息。一个非常常见的用途是将 [IPTC]() 信息嵌入到 APP13 标记中。可以使用 `iptcparse()` 函数将二进制的 APP13 标记解析为可读的内容。
  > `$image_info` 仅支持 JFIF 文件。



## 返回值

返回信息最多包含 7 个元素。并非所有图像类型都包含 `channels` 和 `bits` 元素。

索引 0 和 1 分别包含图像的宽度和高度。

> 一些格式可能没有图像或者包含多个图像。在这种情况下，`getimagesize()` 可能无法正确确定图像大小。`getimagesize()` 此时会返回的宽高为 0。

> `getimagesize()` 是独立于任何图像元数据的。例如，如果 Exif `Orientation` 标志设置为将图像旋转 90 或 270 度的值，索引 0 和 1 被交换，即包含高度和宽度。

索引 2 是表示图像类型的某个 `IMAGETYPE_{*}` 常量。

索引 3 是文本字符串，包含可以直接用于 IMG 标签的正确 `height="yyy" width="xxx"` 字符串。

`mime` 是图像对应的 MIME 类型。此信息可用于传递具有正确 HTTP `Content-type` 报头的图像：

**`getimagesize()` 和 MIME 类型**

```php


<?php
$size = getimagesize($filename);
$fp = fopen($filename, "rb");
if ($size && $fp) {
    header("Content-type: {$size['mime']}");
    fpassthru($fp);
    exit;
} else {
    // error
}
?>

    
```

`channels` 对 RGB 图片为 3，对 CMYK 图像为 4。

`bits` 是每种颜色的位数。

对应一些图像类型，`channels` 和 `bits` 的存在可能会让人困惑。例如，GIF 每个像素始终使用 3 个通道，但对于带有全局彩色表的动画 GIF，却无法计算每个像素的位数。

失败时返回 `false`。

## 错误／异常

如果无法访问 `$filename` 图像，`getimagesize()` 将生成 `E_WARNING` 级别的错误。读取错误时，`getimagesize()` 将生成 `E_NOTICE` 级别的错误。

从 PHP 8.0.0 开始，如果 `$filename` 不存在或无法访问， 将抛出一个 ValueError。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.2.0 | 现在将正确返回 AVIF 图像的实际尺寸、bits 和 channels；以前，尺寸报告为 `0x0`，并且不会报告 bits 和 channels。 |
| 8.0.0 | 如果 `$filename` 不存在或无法访问，将抛出一个 ValueError；之前会生成一个 `E_WARNING` 级别的错误，并且函数返回 `false`。 |
| 7.1.0 | 新增 WebP 支持。 |

## 示例

**`getimagesize()` 示例**

```php


<?php
list($width, $height, $type, $attr) = getimagesize("img/flag.jpg");
echo "<img src=\"img/flag.jpg\" $attr alt=\"getimagesize() example\" />";
?>

    
```

**getimagesize (URL)**

```php


<?php
$size = getimagesize("http://www.example.com/gifs/logo.gif");

// if the file name has space in it, encode it properly
$size = getimagesize("http://www.example.com/gifs/lo%20go.gif");

?>

    
```

**getimagesize() 返回 IPTC**

```php


<?php
$size = getimagesize("testimg.jpg", $info);
if (isset($info["APP13"])) {
    $iptc = iptcparse($info["APP13"]);
    var_dump($iptc);
}
?>

    
```

## 注释

> 此函数不需要 GD 图象库。

## 参见

 `image_type_to_mime_type()` `exif_imagetype()` `exif_read_data()` `exif_thumbnail()` `imagesx()` `imagesy()`
