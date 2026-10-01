---
id: "zh-php-function-pdostatement-fetchcolumn"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::fetchColumn"
title: "从结果集中的下一行返回单独的一列"
signature: "public mixed PDOStatement::fetchColumn(int $column = 0)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.fetchcolumn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从结果集中的下一行返回单独的一列

## 说明

```php
public mixed PDOStatement::fetchColumn(int $column = 0)
```

从结果集中的下一行返回单独的一列，如果没有了，则返回 `false` 。

> `PDOStatement::fetchColumn()` 不应该用于检索 boolean 列，因为无法区分 `false` 值和没有更多行可检索。请改用 `PDOStatement::fetch()`。

## 参数

- **`$column`** — 你想从行里取回的列的索引数字（以0开始的索引）。如果没有提供值，则 `PDOStatement::fetchColumn()` 获取第一列。

## 返回值

`PDOStatement::fetchColumn()` 从结果集中的下一行返回单独的一列，如果没有更多行，则返回 `false`。

> 如果使用 `PDOStatement::fetchColumn()` 取回数据，则没有办法返回同一行的另外一列。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**返回下一行的第一列**

```php


<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

print "Fetch the first column from the first row in the result set:\n";
$result = $sth->fetchColumn();
print "name = $result\n";

print "Fetch the second column from the second row in the result set:\n";
$result = $sth->fetchColumn(1);
print "colour = $result\n";
?>

    
```

以上示例会输出：

```text


Fetch the first column from the first row in the result set:
name = lemon
Fetch the second column from the second row in the result set:
colour = red

    
```

## 参见

`PDO::query()` `PDOStatement::fetch()` `PDOStatement::fetchAll()` `PDO::prepare()` `PDOStatement::setFetchMode()`
