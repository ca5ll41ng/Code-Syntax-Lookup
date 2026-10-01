---
id: "zh-php-function-pdostatement-columncount"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::columnCount"
title: "返回结果集中的列数"
signature: "public int PDOStatement::columnCount()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.columncount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回结果集中的列数

## 说明

```php
public int PDOStatement::columnCount()
```

使用 `PDOStatement::columnCount()` 返回由 PDOStatement 对象代表的结果集中的列数。

如果是由 `PDO::query()` 返回的 PDOStatement 对象，则列数计算立即可用。

如果是由 `PDO::prepare()` 返回的 PDOStatement 对象，则在调用 `PDOStatement::execute()` 之前都不能准确地计算出列数。

## 参数

此函数没有参数。

## 返回值

返回由 PDOStatement 对象代表的结果集中的列数，即便结果集为空。如果没有结果集，则 `PDOStatement::columnCount()` 返回 `0`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**计算列数**

下面示例演示如何使用 `PDOStatement::columnCount()` 操作一个结果集和一个空集。

```php


<?php
$dbh = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');

$sth = $dbh->prepare("SELECT name, colour FROM fruit");

/*  计算一个（不存在）的结果集中的列数 */
$colcount = $sth->columnCount();
print "Before execute(), result set has $colcount columns (should be 0)\n";

$sth->execute();

/* 计算结果集中的列数 */
$colcount = $sth->columnCount();
print "After execute(), result set has $colcount columns (should be 2)\n";

?>

    
```

以上示例会输出：

```text


Before execute(), result set has 0 columns (should be 0)
After execute(), result set has 2 columns (should be 2)

    
```

## 参见

`PDO::prepare()` `PDOStatement::execute()` `PDOStatement::rowCount()`
