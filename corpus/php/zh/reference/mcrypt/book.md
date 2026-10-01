---
id: "zh-php-guide-book-mcrypt"
language: "php"
lang: "zh"
category: "guide"
name: "book.mcrypt"
title: "Mcrypt"
module: "mcrypt"
source_url: "https://www.php.net/manual/zh/book.mcrypt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mcrypt

{{{ preface 

 简介 
> 此功能自 PHP 7.1.0 起*弃用*，并在 PHP 7.2.0 中*移除*。
>
> 此功能可以使用如下替代：
>
> Sodium （自 PHP 7.2.0 起可用） OpenSSL

 
> 此扩展已被移至  资源库；不再与 PHP 捆绑，从 PHP 7.2.0.

  本扩展是 mcrypt 库的接口，mcrypt 库提供了对多种块算法的支持，包括：DES、TripleDES、Blowfish（默认）、3-WAY、SAFER-SK64、SAFER-SK128、TWOFISH、TEA、RC2 以及 GOST，并且支持 CBC、OFB、CFB 和 ECB 密码模式。此外，还支持诸如 RC6 和 IDEA 这两种“非免费”的算法。默认情况下，CFB/OFB 是 8bit。   

 }}}
