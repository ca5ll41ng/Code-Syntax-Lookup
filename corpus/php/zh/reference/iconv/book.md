---
id: "zh-php-guide-book-iconv"
language: "php"
lang: "zh"
category: "guide"
name: "book.iconv"
title: "iconv"
module: "iconv"
source_url: "https://www.php.net/manual/zh/book.iconv.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# iconv

{{{ preface 

 简介  此模块包含了 iconv 字符集转换功能的接口。 使用此模块，你可以将一个本地字符集表达的字符串转换成另一种字符集，比如可以是 Unicode 字符集。 支持的字符集基于你系统上 iconv 的实现。 注意，在某些系统上 iconv 函数可能无法以你预期的那样工作。 在这种情况下，安装 [GNU libiconv]() 库将会是个不错的主意。 它最终将会产生更一致的结果。    这个扩展具有多种实用功能，来帮助您编写多语言脚本。 让我们看看以下章节，来探索新的功能。   

 }}}
