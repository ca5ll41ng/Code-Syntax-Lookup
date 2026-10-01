---
id: "zh-php-guide-class-splfileobject"
language: "php"
lang: "zh"
category: "guide"
name: "class.splfileobject"
title: "SplFileObject 类"
module: "spl"
source_url: "https://www.php.net/manual/zh/class.splfileobject.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SplFileObject 类

SplFileObject

   简介  SplFileObject 类为文件提供了一个面向对象接口。      类摘要    `SplFileObject`   `extends` `SplFileInfo`   `implements` RecursiveIterator   SeekableIterator  常量  `public` `const` `int` `SplFileObject::DROP_NEW_LINE`   `public` `const` `int` `SplFileObject::READ_AHEAD`   `public` `const` `int` `SplFileObject::SKIP_EMPTY`   `public` `const` `int` `SplFileObject::READ_CSV`  方法   继承的方法       预定义常量 
- **`SplFileObject::DROP_NEW_LINE`** — 删除行尾的换行符。
- **`SplFileObject::READ_AHEAD`** — 使用 rewind 或 next 方法时，从文件中读取一行数据。
- **`SplFileObject::SKIP_EMPTY`** — 跳过文件中的空白行。这需要启用 `READ_AHEAD` 标志，以达到预期的效果。
- **`SplFileObject::READ_CSV`** — 以 CSV 行的形式读取。

    更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现在是有类型的。 |
