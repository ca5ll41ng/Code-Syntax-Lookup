---
id: "zh-php-guide-book-imap"
language: "php"
lang: "zh"
category: "guide"
name: "book.imap"
title: "IMAP, POP3 和 NNTP"
module: "imap"
source_url: "https://www.php.net/manual/zh/book.imap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# IMAP, POP3 和 NNTP

IMAP

 {{{ preface 

 简介 
> 此扩展自 PHP 8.4.0 起*弃用*并且*不再捆绑*。

  这些函数提供了可以操作 IMAP 以及 NNTP，POP3 和本地邮箱的方法。    注意，有些 IMAP 函数在 POP3 协议下将不能正常的工作。   
> IMAP 扩展不是线程安全的；它不应该被用于 ZTS 构建。

 

 }}}
