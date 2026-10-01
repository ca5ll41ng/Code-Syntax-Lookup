---
id: "en-php-guide-book-recode"
language: "php"
lang: "en"
category: "guide"
name: "book.recode"
title: "GNU Recode"
module: "recode"
source_url: "https://www.php.net/manual/en/book.recode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# GNU Recode

Recode

 {{{ preface 

 Introduction 
> This extension is *unmaintained*.

  This module contains an interface to the GNU Recode library. The GNU Recode library converts files between various coded character sets and surface encodings. When this cannot be achieved exactly, it may get rid of the offending characters or fall back on approximations. The library recognises or produces nearly 150 different character sets and is able to convert files between almost any pair. Most [RFC 1345](1345) character sets are supported.   
> This extension is unbundled and moved to [PECL](recode) as of PHP 7.4.0. Consider to use the Multibyte String or iconv extensions instead.

 
> This extension is not available on Windows platforms.

 

 }}}
