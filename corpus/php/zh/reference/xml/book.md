---
id: "zh-php-guide-book-xml"
language: "php"
lang: "zh"
category: "guide"
name: "book.xml"
title: "XML 解析器"
module: "xml"
source_url: "https://www.php.net/manual/zh/book.xml.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# XML 解析器

{{{ preface 

 简介  XML（可扩展标记语言，英文：eXtensible Markup Language）是一种在互联网上用于结构化文档交互的数据格式。 它是互联网协会（W3C）定义的标准。与 XML 及其相关技术的信息可访问 []()。    此 PHP 扩展实现支持 James Clark 使用 PHP 编写的 expat。此工具包可解析（但不能验证）XML 文档。它支持 PHP 所提供的 3 种字符编码：`US-ASCII`、`ISO-8859-1` 和 `UTF-8`。不支持 `UTF-16`。    此扩展可创建 XML 解析器并为不同的 XML 事件定义 *处理程序*。每个 XML 解析器还存在少数可以调节的参数。   

 }}}
