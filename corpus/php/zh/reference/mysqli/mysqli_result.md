---
id: "zh-php-guide-class-mysqli-result"
language: "php"
lang: "zh"
category: "guide"
name: "class.mysqli-result"
title: "mysqli_result 类"
module: "mysqli"
source_url: "https://www.php.net/manual/zh/class.mysqli-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# mysqli_result 类

mysqli_result

   简介  代表从一个数据库查询中获取的结果集。      类摘要    `mysqli_result`   `implements` IteratorAggregate  属性  `public` `readonly` `int` `current_field`   `public` `readonly` `int` `field_count`   `public` `readonly` `array|null` `lengths`   `public` `readonly` `int|string` `num_rows`   `public` `int` `type`  方法       属性 
- **`type`** — 存储的是否为缓冲的结果，`integer` 形式（分别是 `MYSQLI_STORE_RESULT` 或 `MYSQLI_USE_RESULT`）。

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.0.0 | `mysqli_result` 现在实现 IteratorAggregate。之前实现的是 Traversable。 |
