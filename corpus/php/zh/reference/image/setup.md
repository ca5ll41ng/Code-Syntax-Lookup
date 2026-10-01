---
id: "zh-php-guide-image-setup"
language: "php"
lang: "zh"
category: "guide"
name: "image.setup"
title: "安装/配置"
module: "image"
source_url: "https://www.php.net/manual/zh/image.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Requirements 

## 需求

如果拥有 GD 库（位于 []()），还可以创建和处理图像。

可以处理的图像格式取决于安装的 GD 版本，以及 GD 可能需要访问这些图像格式的任何其他库。

> 需要 libgd-2.1.0 或更高版本。或者使用 PHP 中绑定的 GD 库。

> GD 库需要 zlib >= 1.2.0.4。

可能希望增强 GD 库以处理更多的图像格式。

| 图像格式 | 需要下载的库 | 备注 |
| --- | --- | --- |
| `gif` |  |  |
| `avif` |  |  |
| `jpeg` | []() | 在编译 jpeg 时（编译 PHP 之前），必须在配置步骤使用 --enable-shared 选项。否则，当进入编译 PHP 的配置步骤时，会收到一条错误信息，说 `libjpeg.(a\|so) not found`。 |
| `png` | []() |  |
| `xpm` | []() | 如果你的系统中已经安装了 X-Environment，就可能已经有了这个库。 |
| `webp` |  |  |

希望增强 GD 以处理不同的字体。[FreeType 2]() 库支持。

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Configuration 

  

 }}} 

 {{{ Resources 

## 资源类型

本扩展定义了下列资源类型：

| 名称 | 说明 | 备注 |
| --- | --- | --- |
| `gd` | 图像资源，由 `imagecreatefrompng()` 等函数使用 | PHP 8.0.0 之前 |
| `gd font` | 由 `imageloadfont()` 函数内部创建的字体资源 | PHP 8.0.0 之前 |

 }}}
