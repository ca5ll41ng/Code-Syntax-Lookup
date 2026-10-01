---
id: "zh-php-guide-ref-mysql"
language: "php"
lang: "zh"
category: "guide"
name: "ref.mysql"
title: "MySQL 函数"
module: "mysql"
source_url: "https://www.php.net/manual/zh/ref.mysql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MySQL 函数

注释 
> 大多数 MySQL 函数的最后一个可选参数是 `$link_identifier`。 如果没有提供这个参数，则会使用最后一个打开的连接。 若不存在这个最后打开的连接，则会尝试用 php.ini 里定义的默认参数来连接。 如果没有成功连接，函数会返回 `false`。
