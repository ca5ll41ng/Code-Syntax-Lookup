---
id: "zh-php-function-pdostatement-rowcount"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::rowCount"
title: "返回受上一个 SQL 语句影响的行数"
signature: "public int PDOStatement::rowCount()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.rowcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回受上一个 SQL 语句影响的行数

## 说明

```php
public int PDOStatement::rowCount()
```

`PDOStatement::rowCount()` 返回上一个由对应的 `PDOStatement` 对象执行 DELETE、INSERT 或 UPDATE 语句受影响的行数。

对于生成结果集的语句，例如 `SELECT`，行为是未定义的，并且对于每个驱动程序可能不同。某些数据库可能会返回该语句生成的行数（例如缓冲模式下的 MySQL），但不能保证所有数据库都具有这种行为，并且对于可移植的应用不应依赖于此方式。

> 对 PostgreSQL 驱动程序，仅当将 `PDO::ATTR_CURSOR` 语句属性设置为 `PDO::CURSOR_SCROLL` 时此方法返回“0”（零）。

## 参数

此函数没有参数。

## 返回值

返回行数。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**返回删除的行数**

`PDOStatement::rowCount()` 返回受 DELETE、INSERT 或 UPDATE 语句影响的行数。

```php


<?php
/*  从 FRUIT 数据表中删除所有行 */
$del = $dbh->prepare('DELETE FROM fruit');
$del->execute();

/*  返回被删除的行数 */
print "Return number of rows that were deleted:\n";
$count = $del->rowCount();
print "Deleted $count rows.\n";
?>

    
```

以上示例的输出类似于：

```text


Return number of rows that were deleted:
Deleted 9 rows.

    
```

**计算由一个 SELECT 语句返回的行数**

对于大多数数据库，`PDOStatement::rowCount()` 不能返回受一条 SELECT 语句影响的行数。替代的方法是，使用 `PDO::query()` 来发出一条和原打算中的 SELECT 语句有相同条件表达式的 SELECT COUNT(*) 语句，然后用 `PDOStatement::fetchColumn()` 来取得匹配的行数。

```php


<?php
$sql = "SELECT COUNT(*) FROM fruit WHERE calories > 100";
$res = $conn->query($sql);
$count = $res->fetchColumn();

print "There are " .  $count . " matching records.";

    
```

以上示例的输出类似于：

```text


There are 2 matching records.

    
```

## 参见

`PDOStatement::columnCount()` `PDOStatement::fetchColumn()` `PDO::query()`
