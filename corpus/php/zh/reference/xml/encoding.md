---
id: "zh-php-guide-xml-encoding"
language: "php"
lang: "zh"
category: "guide"
name: "xml.encoding"
title: "字符编码"
module: "xml"
source_url: "https://www.php.net/manual/zh/xml.encoding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 字符编码

PHP 的 XML 扩展通过几种不同的字符编码支持 [Unicode]() 字符集。有两类字符编码， 原始编码和目标编码。在 PHP 的内部，文档始终是使用 `UTF-8` 编码。

解析 XML 文档就完成原始编码。创建 XML 解析器后，可以指定原始编码（在 XML 解析器此后的生命周期里，不能修改）。支持的原始编码有 `ISO-8859-1`、`US-ASCII` 和 `UTF-8`。前两种是单字节编码, 即每一个字符表现为一个字节。`UTF-8` 可将字符编码为一串不定数量（最高 21）的位（bit）, 编码为 1 到 4 个字节。PHP 使用的默认原始编码是 `ISO-8859-1`。

当 PHP 将数据传给 XML 处理函数时，目标编码就完成了。在创建 XML 解析器时，目标编码被设定为与原始编码相同，但可任意修改。目标编码会影响字符数据及标签名，与处理指令目标。

如 XML 解析器遇到原始编码所能表示的范围之外的字符时，会返回一个错误。

如 PHP 遇到在被解析的 XML 文档中不能用所指定的目标编码表示的字符时，这个问题字符会被“降级”。通常来说，就是那些字符会被替换成问号（?）。
