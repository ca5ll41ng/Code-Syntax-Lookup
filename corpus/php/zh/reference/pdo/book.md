---
id: "zh-php-guide-book-pdo"
language: "php"
lang: "zh"
category: "guide"
name: "book.pdo"
title: "PHP 数据对象"
module: "pdo"
source_url: "https://www.php.net/manual/zh/book.pdo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PHP 数据对象

PDO

 {{{ preface 

 简介  `PHP 数据对象`（PDO）扩展为 PHP 访问数据库定义了一个轻量级的一致接口。实现 PDO 接口的每个数据库驱动可以将特定具体数据库的特性公开作为标准扩展函数。注意不能单独使用 PDO 扩展执行任何数据库功能；必须使用具体数据库的 PDO 驱动程序来访问数据库服务器。    PDO 提供了*数据访问*抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数来查询和获取数据。PDO *不*提供*数据库*抽象；不会重写 SQL 或模拟缺失的特性。如果需要，应该使用成熟的抽象层。    PDO 随 PHP 一起提供。   

 }}}
