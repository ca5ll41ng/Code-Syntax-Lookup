---
id: "zh-php-guide-class-pdostatement"
language: "php"
lang: "zh"
category: "guide"
name: "class.pdostatement"
title: "PDOStatement 类"
module: "pdo"
source_url: "https://www.php.net/manual/zh/class.pdostatement.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# PDOStatement 类

PDOStatement

   简介  代表一条预处理语句，并在该语句被执行后代表一个相关的结果集。      类摘要    `PDOStatement`   `implements` IteratorAggregate  属性  `public` `string` `queryString`  方法      属性 
- **`queryString`** — 所用的查询字符串

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | 现在 `PDOStatement` 的实现不是 Traversable 而是 IteratorAggregate。 |
