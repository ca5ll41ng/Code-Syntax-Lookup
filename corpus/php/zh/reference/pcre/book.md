---
id: "zh-php-guide-book-pcre"
language: "php"
lang: "zh"
category: "guide"
name: "book.pcre"
title: "正则表达式(兼容 Perl)"
module: "pcre"
source_url: "https://www.php.net/manual/zh/book.pcre.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 正则表达式(兼容 Perl)

PCRE

 简介  这些函数中使用的模式语法非常类似 perl。表达式必须用分隔符闭合，比如一个正斜杠(/)。 分隔符可以使任意非字母数字，除反斜杠(\)和空字节之外的非空白 ascii 字符。 如果分隔符 在表达式中使用，需要使用反斜线进行转义。也可以使用 perl 样式的()、 {}、 [] 以及 <> 作为分隔符。 更详细的解释参见模式语法。    结束分隔符后面可以紧跟模式修饰符来影响匹配效果。 参见模式修饰符。   
> 这个扩展维护了一个已编译正则表达式的全局线程化缓存(最大4096)。

 
> 你应该知道一些 PCRE 的限制。阅读[]() 获取更详细信息。

   PCRE 库是一个实现了与 perl 5 在语法和语义上略有差异(详见下文)的正则表达式模式匹配功能的函数集。 当前的实现对应于 perl 5.005。
