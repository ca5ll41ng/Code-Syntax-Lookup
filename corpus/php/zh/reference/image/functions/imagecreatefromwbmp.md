---
id: "zh-php-function-function-imagecreatefromwbmp"
language: "php"
lang: "zh"
category: "function"
name: "imagecreatefromwbmp"
title: "由文件或 URL 创建一个新图象。"
signature: "GdImage|false imagecreatefromwbmp(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromwbmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 由文件或 URL 创建一个新图象。

## 说明

```php
GdImage|false imagecreatefromwbmp(string $filename)
```

`imagecreatefromwbmp()` 返回图像标识符，代表从指定文件名获得的图像。

> WBMP 图像是无线位图（Wireless Bitmaps），不是 Windows 位图（Windows Bitmaps）。后者可以用 `imagecreatefrombmp()` 加载。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — WBMP 图像的路径。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例；之前返回 `resource`。 |

## 示例

**在加载 WBMP 期间处理错误的示例**

```php


<?php
function LoadWBMP($imgname)
{
    /* 尝试打开 */
    $im = @imagecreatefromwbmp($imgname);

    /* 查看是否失败 */
    if(!$im)
    {
        /* 创建空白图像 */
        $im  = imagecreatetruecolor(150, 30);
        $bgc = imagecolorallocate($im, 255, 255, 255);
        $tc  = imagecolorallocate($im, 0, 0, 0);

        imagefilledrectangle($im, 0, 0, 150, 30, $bgc);

        /* 输出错误消息 */
        imagestring($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }

    return $im;
}

header('Content-Type: image/vnd.wap.wbmp');

$img = LoadWBMP('bogus.image');

imagewbmp($img);
?>

   
```
