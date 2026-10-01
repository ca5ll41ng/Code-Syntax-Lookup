---
id: "zh-php-guide-xml-case-folding"
language: "php"
lang: "zh"
category: "guide"
name: "xml.case-folding"
title: "大写转换"
module: "xml"
source_url: "https://www.php.net/manual/zh/xml.case-folding.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 大写转换

元素处理函数可取得元素名称转换为 case-folded（大写字母）形式。定义 Case-folding 为“将非大写字母替换为相对应的大写字母的字符串操作”。换句话说，在 XML 中，case-folding 就是转换为大写。

默认情况下，所有的通过处理函数的元素名都被转换为大写字母。每个 XML 解析器可分别通过 `xml_parser_get_option()` 与 `xml_parser_set_option()` 函数来查询与控制此项功能。
