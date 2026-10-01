---
id: "zh-php-guide-xml-setup"
language: "php"
lang: "zh"
category: "guide"
name: "xml.setup"
title: "安装/配置"
module: "xml"
source_url: "https://www.php.net/manual/zh/xml.setup.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 安装/配置

{{{ Requirements 

## 需求

此扩展需要 libxml PHP 扩展。这意味着需要传递 --with-libxml，或在 PHP 7.4 之前的版本中传递 --enable-libxml， 尽管这将默默完成因为 libxml 是默认开启的。

默认情况下，此扩展使用 expat compat layer 。也可使用 expat，此库位于 []()。使用 expat 库中的 Makefile 是不会默认构建出库文件的，可使用以下构建规则进行构建：

```makefile


libexpat.a: $(OBJS)
    ar -rc $@ $(OBJS)
    ranlib $@

   
```

expat 的源代码 RPM 安装包可在 []() 找到。

 }}} 

 {{{ Installation 

  

 }}} 

 {{{ Resources 

## 资源类型

在 PHP 8.0.0 之前，`xml_parser_create()` 与 `xml_parser_create_ns()` 返回的 `XML` 资源会引用 XML 解析器实例，以被此扩展提供的函数使用。

 }}}
