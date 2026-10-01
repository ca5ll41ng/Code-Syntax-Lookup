---
id: "zh-php-guide-sqlite3-constants"
language: "php"
lang: "zh"
category: "guide"
name: "sqlite3.constants"
title: "预定义常量"
module: "sqlite3"
source_url: "https://www.php.net/manual/zh/sqlite3.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`SQLITE3_ASSOC` (`int`)** — 指定 `Sqlite3Result::fetchArray()` 方法返回按列名称索引的数组，其中列名即相应结果集返回的列名。
- **`SQLITE3_NUM` (`int`)** — 指定 `Sqlite3Result::fetchArray()` 方法返回按列序号索引的数组，其中列号即相应结果集返回的列号，从第 0 列开始计数。
- **`SQLITE3_BOTH` (`int`)** — 指定 `Sqlite3Result::fetchArray()` 方法返回同时按列名称与列序号索引的数组，其中列名即相应结果集返回的列名，列号即相应结果集返回的列号，从第 0 列开始计数。
- **`SQLITE3_INTEGER` (`int`)** — 表示 SQLite3 INTEGER (整型) 存储类。
- **`SQLITE3_FLOAT` (`int`)** — 表示 SQLite3 REAL (FLOAT) (实型) 存储类。
- **`SQLITE3_TEXT` (`int`)** — 表示 SQLite3 TEXT (文本) 存储类。
- **`SQLITE3_BLOB` (`int`)** — 表示 SQLite3 BLOB (二进制对象) 存储类。
- **`SQLITE3_NULL` (`int`)** — 表示 SQLite3 NULL 存储类。
- **`SQLITE3_OPEN_READONLY` (`int`)** — 指定 SQLite3 数据库以只读模式打开。
- **`SQLITE3_OPEN_READWRITE` (`int`)** — 指定 SQLite3 数据库以读写模式打开。
- **`SQLITE3_OPEN_CREATE` (`int`)** — 指定 SQLite3 数据库若不存在，则创建并打开。
- **`SQLITE3_DETERMINISTIC` (`int`)** — 使用 `SQLite3::createFunction()` 创建的指定函数是确定性的，即它始终在单个 SQL 语句中指定的相同输入返回相同结果。（自 PHP 7.1.4 起可用。）
