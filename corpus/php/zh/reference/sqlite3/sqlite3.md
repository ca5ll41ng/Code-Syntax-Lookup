---
id: "zh-php-guide-class-sqlite3"
language: "php"
lang: "zh"
category: "guide"
name: "class.sqlite3"
title: "SQLite3 类"
module: "sqlite3"
source_url: "https://www.php.net/manual/zh/class.sqlite3.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# SQLite3 类

SQLite3

   简介  连接 SQLite 3 数据库的类。      类摘要    `SQLite3`  常量  `public` `const` `int` `SQLite3::OK`   `public` `const` `int` `SQLite3::DENY`   `public` `const` `int` `SQLite3::IGNORE`   `public` `const` `int` `SQLite3::CREATE_INDEX`   `public` `const` `int` `SQLite3::CREATE_TABLE`   `public` `const` `int` `SQLite3::CREATE_TEMP_INDEX`   `public` `const` `int` `SQLite3::CREATE_TEMP_TABLE`   `public` `const` `int` `SQLite3::CREATE_TEMP_TRIGGER`   `public` `const` `int` `SQLite3::CREATE_TEMP_VIEW`   `public` `const` `int` `SQLite3::CREATE_TRIGGER`   `public` `const` `int` `SQLite3::CREATE_VIEW`   `public` `const` `int` `SQLite3::DELETE`   `public` `const` `int` `SQLite3::DROP_INDEX`   `public` `const` `int` `SQLite3::DROP_TABLE`   `public` `const` `int` `SQLite3::DROP_TEMP_INDEX`   `public` `const` `int` `SQLite3::DROP_TEMP_TABLE`   `public` `const` `int` `SQLite3::DROP_TEMP_TRIGGER`   `public` `const` `int` `SQLite3::DROP_TEMP_VIEW`   `public` `const` `int` `SQLite3::DROP_TRIGGER`   `public` `const` `int` `SQLite3::DROP_VIEW`   `public` `const` `int` `SQLite3::INSERT`   `public` `const` `int` `SQLite3::PRAGMA`   `public` `const` `int` `SQLite3::READ`   `public` `const` `int` `SQLite3::SELECT`   `public` `const` `int` `SQLite3::TRANSACTION`   `public` `const` `int` `SQLite3::UPDATE`   `public` `const` `int` `SQLite3::ATTACH`   `public` `const` `int` `SQLite3::DETACH`   `public` `const` `int` `SQLite3::ALTER_TABLE`   `public` `const` `int` `SQLite3::REINDEX`   `public` `const` `int` `SQLite3::ANALYZE`   `public` `const` `int` `SQLite3::CREATE_VTABLE`   `public` `const` `int` `SQLite3::DROP_VTABLE`   `public` `const` `int` `SQLite3::FUNCTION`   `public` `const` `int` `SQLite3::SAVEPOINT`   `public` `const` `int` `SQLite3::COPY`   `public` `const` `int` `SQLite3::RECURSIVE`  方法       预定义常量 
- **`SQLite3::OK`**
- **`SQLite3::DENY`**
- **`SQLite3::IGNORE`**
- **`SQLite3::CREATE_INDEX`**
- **`SQLite3::CREATE_TABLE`**
- **`SQLite3::CREATE_TEMP_INDEX`**
- **`SQLite3::CREATE_TEMP_TABLE`**
- **`SQLite3::CREATE_TEMP_TRIGGER`**
- **`SQLite3::CREATE_TEMP_VIEW`**
- **`SQLite3::CREATE_TRIGGER`**
- **`SQLite3::CREATE_VIEW`**
- **`SQLite3::DELETE`**
- **`SQLite3::DROP_INDEX`**
- **`SQLite3::DROP_TABLE`**
- **`SQLite3::DROP_TEMP_INDEX`**
- **`SQLite3::DROP_TEMP_TABLE`**
- **`SQLite3::DROP_TEMP_TRIGGER`**
- **`SQLite3::DROP_TEMP_VIEW`**
- **`SQLite3::DROP_TRIGGER`**
- **`SQLite3::DROP_VIEW`**
- **`SQLite3::INSERT`**
- **`SQLite3::PRAGMA`**
- **`SQLite3::READ`**
- **`SQLite3::SELECT`**
- **`SQLite3::TRANSACTION`**
- **`SQLite3::UPDATE`**
- **`SQLite3::ATTACH`**
- **`SQLite3::DETACH`**
- **`SQLite3::ALTER_TABLE`**
- **`SQLite3::REINDEX`**
- **`SQLite3::ANALYZE`**
- **`SQLite3::CREATE_VTABLE`**
- **`SQLite3::DROP_VTABLE`**
- **`SQLite3::FUNCTION`**
- **`SQLite3::SAVEPOINT`**
- **`SQLite3::COPY`**
- **`SQLite3::RECURSIVE`**

   更新日志 
| 版本 | 说明 |
| --- | --- |
| 8.4.0 | 类常量现在是有类型的。 |
