---
id: "zh-php-function-function-imagecreatefromgd2"
language: "php"
lang: "zh"
category: "function"
danger: {"type":"sink","attack":["path_traversal"],"cwe":["CWE-22"],"params":[1]}
name: "imagecreatefromgd2"
title: "从 GD2 文件或 URL 新建一图像"
signature: "GdImage|false imagecreatefromgd2(string $filename)"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagecreatefromgd2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从 GD2 文件或 URL 新建一图像

## 说明

```php
GdImage|false imagecreatefromgd2(string $filename)
```

从 GD2 文件或 URL 新建一图像。

> 如已启用fopen 包装器，在此函数中， URL 可作为文件名。关于如何指定文件名详见 `fopen()`。各种 wapper 的不同功能请参见 `wrappers`，注意其用法及其可提供的预定义变量。

## 参数

- **`$filename`** — GD2 图像的路径。

## 返回值

成功后返回图象对象,失败后返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 成功时，此函数现在返回 `GDImage` 实例，之前返回 `resource`。 |

## 示例

**`imagecreatefromgd2()` 示例**

```php


<?php
// 加载 gd2 图像
$im = imagecreatefromgd2('./test.gd2');


// 在图像上应用效果。
// 在这个例子中，反转图像颜色
if(function_exists('imagefilter'))
{
    imagefilter($im, IMG_FILTER_NEGATE);
}

// 保存图像
imagegd2($im, './test_updated.gd2');
?>

    
```

## 注释

> The GD and GD2 image formats are proprietary image formats of libgd. They have to be regarded *obsolete*, and should only be used for development and testing purposes.
