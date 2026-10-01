---
id: "zh-php-function-function-imagetypes"
language: "php"
lang: "zh"
category: "function"
name: "imagetypes"
title: "返回 PHP 内置支持的图像类型"
signature: "int imagetypes()"
module: "image"
source_url: "https://www.php.net/manual/zh/function.imagetypes.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回 PHP 内置支持的图像类型

## 说明

```php
int imagetypes()
```

返回当前安装的 PHP 支持的图片类型。

## 参数

此函数没有参数。

## 返回值

返回链接到 PHP 的 GD 版本支持的图片类型相对应的位字段。返回以下位：`IMG_AVIF` | `IMG_BMP` | `IMG_GIF` | `IMG_JPG` | `IMG_PNG` | `IMG_WBMP` | `IMG_XPM` | `IMG_WEBP`.

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 8.1.0 | 新增 `IMG_AVIF`。 |
| 7.2.0 | 新增 `IMG_BMP`。 |
| 7.0.10 | 新增 `IMG_WEBP`。 |

## 示例

**检测 PNG 支持**

```php


<?php
if (imagetypes() & IMG_PNG) {
    echo "PNG Support is enabled";
}
?>

    
```

## 参见

 `gd_info()`
