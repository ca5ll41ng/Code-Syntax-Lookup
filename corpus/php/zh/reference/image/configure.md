---
id: "zh-php-guide-image-installation"
language: "php"
lang: "zh"
category: "guide"
name: "image.installation"
title: "安装"
module: "image"
source_url: "https://www.php.net/manual/zh/image.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

要激活 GD 支持，配置 PHP 时加上 --with-gd[=DIR]，DIR 是 GD 的基本安装目录。要使用推荐的绑定的 GD 库版本，使用 --with-gd。要编译 GD 库，需要libpng 和 libjpeg。 自 PHP 7.4.0 起，--with-gd 变为 --enable-gd （是否启用扩展） 和 --with-external-gd （选择使用外部 libgd，而不是绑定的）。

在 Windows 中，需要将 GD 的 DLL 文件 `php_gd.dll` 作为一个扩展包含在 php.ini 中。 在 PHP 8.0.0 之前，DLL 被命名为 `php_gd2.dll`。

要增强 GD 的能力以处理更多的图像格式，在配置 PHP 时指定 `--with-XXXX` 的配置开关。

| 图像格式 | 配置开关 |
| --- | --- |
| `avif` | 要激活 avif 的支持，加上 --with-avif。 从 PHP 8.1.0 起可用。 |
| `jpeg` | 要激活 jpeg 的支持，加上 --with-jpeg-dir=DIR。 支持 Jpeg 6b、7 或 8。 从 PHP 7.4.0 开始，使用 --with-jpeg 替代。 |
| `png` | 要激活 png 的支持，加上 --with-png-dir=DIR。注意，libpng 需要 zlib library，因此配置中还要加上 --with-zlib-dir[=DIR]。 从 PHP 7.4.0 开始，--with-png-dir 和 --with-zlib-dir 已经移除。 需要安装 libpng 和 zlib。 |
| `xpm` | 要激活 xpm 的支持，加上 --with-xpm-dir=DIR。 如果配置时提示找不到所需要的库，可以加上 X11 库的路径。 从 PHP 7.4.0 开始，使用 --with-xpm 替代。 |
| `webp` | 要激活 xpm 的支持，加上 --with-webp-dir=DIR。 从 PHP 7.4.0 开始，使用 --with-webp 替代。 |

> 当把 PHP 和 libpng 一起编译时，必须使用和 GD 库连接的同一个版本。

要增强 GD 的能力以处理更多的字体，在配置 PHP 时指定 `--with-XXXX` 的配置开关。

| 字库 | 配置开关 |
| --- | --- |
| `FreeType 2` | 要激活 FreeType 2 的支持，加上 --with-freetype-dir=DIR。 从 PHP 7.4.0 开始使用 --with-freetype 代替，它依赖于 pkg-config。 |
| `本地 TrueType 字符串函数` | 要激活本地 TrueType 字符串函数的支持，加上 --enable-gd-native-ttf。 （此选项无效，自 PHP 7.2.0 起已被删除。） |
