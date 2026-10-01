---
id: "zh-php-guide-xml-eventhandlers"
language: "php"
lang: "zh"
category: "guide"
name: "xml.eventhandlers"
title: "事件处理程序"
module: "xml"
source_url: "https://www.php.net/manual/zh/xml.eventhandlers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 事件处理程序

XML 事件处理程序的定义如下：

| 设置处理程序的 PHP 函数 | 事件描述 |
| --- | --- |
| `xml_set_element_handler()` | 当 XML 解析器遇到开始或结束标签时，会触发元素事件。开始标签和结束标签有不同的处理程序。 |
| `xml_set_character_data_handler()` | 字符数据范指 XML 文档中所有非标记的内容，包括标签之间的空格。注意，XML 解析器不会添加或删除任何空格，由应用程序(你)来判断空格是否有意义。 |
| `xml_set_processing_instruction_handler()` | PHP 程序员必须熟练掌握处理指令（PI）。<?php ?>是处理指令，其中 {php} 被称为“处理指令对象”。除所有以“XML”开头的处理指令对象是系统保留的外，其他的处理函数均是由应用程序指定的。 |
| `xml_set_default_handler()` | 不执行其他处理函数，则会执行默认的处理函数。在默认的处理函数中可取得如 XML 和文档类型声明等信息。 |
| `xml_set_unparsed_entity_decl_handler()` | 未解析的实体声明(NDATA)会调用此处理函数。 |
| `xml_set_notation_decl_handler()` | 符号声明会调用此处理函数 |
| `xml_set_external_entity_ref_handler()` | 当 XML 解析器发现对外部已解析的普通实体的引用时， 会调用此处理函数。例如，引用一个文件或URL。实例可参见 XML 外部实体示例。 |
| `xml_set_start_namespace_decl_handler()` | 在命名空间声明的开始处调用此处理程序。 |
| `xml_set_end_namespace_decl_handler()` | 在命名空间声明的结束处调用此处理程序。请注意，此事件*不是*由 libXML 触发的。 |
