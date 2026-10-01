---
id: "zh-php-function-sqlite3-construct"
language: "php"
lang: "zh"
category: "function"
name: "SQLite3::__construct"
title: "实例化 SQLite3 对象并打开 SQLite 3 数据库"
signature: "public SQLite3::__construct(string $filename, int $flags = SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE, string $encryptionKey = \"\")"
module: "sqlite3"
source_url: "https://www.php.net/manual/zh/sqlite3.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 实例化 SQLite3 对象并打开 SQLite 3 数据库

## 说明

```php
public SQLite3::__construct(string $filename, int $flags = SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE, string $encryptionKey = "")
```

实例化 SQLite3 对象并打开连接到 SQLite 3 数据库的连接。如果构建包括加密，那么将尝试使用密钥。

## 参数

- **`$filename`** — SQLite 数据库的路径，或 `:memory:` 使用内存数据库。如果 `$filename` 是空字符串，那么将创建私有的临时磁盘数据库。一旦数据库连接关闭，这个私有数据库就会自动删除。
- **`$flags`** — 可选的 flag，用于确定如何打开 SQLite 数据库。默认使用 `SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE` 打开。 - `SQLITE3_OPEN_READONLY`：以只读方式打开数据库。 - `SQLITE3_OPEN_READWRITE`：以读写方式打开数据库。 - `SQLITE3_OPEN_CREATE`：如果数据库不存在，则创建数据库。
- **`$encryptionKey`** — 加密和解密 SQLite 数据库时使用的可选加密密钥。如果未安装 SQLite 加密模块，则此参数无效。

## 错误／异常

失败时抛出 `Exception`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.0.10 | `$filename` 可以为空，以使用私有的临时磁盘数据库。 |

## 示例

**`SQLite3::__construct()` 示例**

```php


<?php
$db = new SQLite3('mysqlitedb.db');

$db->exec('CREATE TABLE foo (bar TEXT)');
$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

$result = $db->query('SELECT bar FROM foo');
var_dump($result->fetchArray());
?>

    
```
