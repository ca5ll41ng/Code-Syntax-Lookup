---
id: "zh-php-function-pdo-errorcode"
language: "php"
lang: "zh"
category: "function"
name: "PDO::errorCode"
title: "获取跟数据库句柄上一次操作相关的 SQLSTATE"
signature: "public string|null PDO::errorCode()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.errorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取跟数据库句柄上一次操作相关的 SQLSTATE

## 说明

```php
public string|null PDO::errorCode()
```

## 参数

此函数没有参数。

## 返回值

返回一个 SQLSTATE，一个由 5 个字母或数字组成的在 ANSI SQL 标准中定义的标识符。 简要地说，一个 SQLSTATE 由前面两个字符的类值和后面三个字符的子类值组成。 A class value of 01 indicates a warning and is accompanied by a return code of SQL_SUCCESS_WITH_INFO. Class values other than '01', except for the class 'IM', indicate an error. The class 'IM' is specific to warnings and errors that derive from the implementation of PDO (or perhaps ODBC, if you're using the ODBC driver) itself. The subclass value '000' in any class indicates that there is no subclass for that SQLSTATE.

`PDO::errorCode()` 仅检索直接在数据库句柄上操作执行的错误代码。如果通过 `PDO::prepare()` 或 `PDO::query()` 创建的 PDOStatement 对象并且在 statement 句柄上调用错误，`PDO::errorCode()` 将不会反映该错误。必须在特定 statement 句柄上调用 `PDOStatement::errorCode()` 返回操作执行的错误代码。

如果数据库句柄没有进行操作，则返回 `null` 。

## 示例

**取得一个 SQLSTATE 码**

```php


<?php
/* 引发一个错误 -- BONES 数据表不存在 */
$dbh->exec("INSERT INTO bones(skull) VALUES ('lucy')");

echo "\nPDO::errorCode(): ", $dbh->errorCode();
?>

    
```

以上示例会输出：

```text


PDO::errorCode(): 42S02

    
```

## 参见

`PDO::errorInfo()` `PDOStatement::errorCode()` `PDOStatement::errorInfo()`
