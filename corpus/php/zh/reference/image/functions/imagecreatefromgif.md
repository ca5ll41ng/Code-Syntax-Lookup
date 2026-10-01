---
id: "zh-php-function-function-imagecreatefromgif"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "imagecreatefromgif"
title: "由文件或 URL 创建一个新图象。"
signature: "GdImage|false imagecreatefromgif(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromgif.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 由文件或 URL 创建一个新图象。

## 说明

```php
GdImage|false imagecreatefromgif(string $filename)
```

`imagecreatefromgif()` 返回图像标识符，代表从指定文件名获得的图像。

> 当读取 GIF 文件到内存中时，图像对象仅返回第一帧。图像的大小不一定是 `getimagesize()` 报告的大小。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — GIF 图像的路径。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |

## 示例

**在加载 GIF 期间处理错误的示例**

```php


<?php
function LoadGif($imgname)
{
    /* 尝试打开 */
    $im = @imagecreatefromgif($imgname);

    /* 查看是否失败 */
    if(!$im)
    {
        /* 创建空白图像 */
        $im = imagecreatetruecolor (150, 30);
        $bgc = imagecolorallocate ($im, 255, 255, 255);
        $tc = imagecolorallocate ($im, 0, 0, 0);

        imagefilledrectangle ($im, 0, 0, 150, 30, $bgc);

        /* 输出错误消息 */
        imagestring ($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }

    return $im;
}

header('Content-Type: image/gif');

$img = LoadGif('bogus.image');

imagegif($img);
?>

   
```

以上示例的输出类似于：
