---
id: "zh-php-guide-xml-installation"
language: "php"
lang: "zh"
category: "guide"
name: "xml.installation"
title: "安装"
module: "xml"
source_url: "https://www.php.net/manual/zh/xml.installation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装

此扩展默认为启用，编译时可通过下列选项禁用： --disable-xml

这些函数默认启用，使用了捆绑的 expat 库。可以通过参数 --disable-xml 来禁用 XML 的支持。如果将 PHP 编译为 Apache 1.3.9 或更高版本的一个模块，PHP 将自动使用 Apache 捆绑的 expat 库。如果不希望使用该捆绑的 expat 库，请使用 --with-expat-dir=DIR 配置（configure） PHP，其中 DIR 应该指向 expat 安装的根目录。

PHP 的 Windows 版本已内建对此扩展的支持。不需要载入额外的扩展来使用这些函数。
