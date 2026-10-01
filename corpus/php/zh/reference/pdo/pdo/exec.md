---
id: "zh-php-function-pdo-exec"
language: "php"
lang: "zh"
category: "function"
name: "PDO::exec"
title: "执行 SQL 语句，并返回受影响的行数"
signature: "public int|false PDO::exec(string $statement)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行 SQL 语句，并返回受影响的行数

## 说明

```php
public int|false PDO::exec(string $statement)
```

`PDO::exec()` 在单独的函数调用中执行 SQL 语句，返回受此语句影响的行数。

`PDO::exec()` 不会从 SELECT 语句中返回结果。对于在程序中只需要发出一次的 SELECT 语句，可以考虑使用 `PDO::query()`。对于需要发出多次的语句，可用 `PDO::prepare()` 来预处理 PDOStatement 对象并用 `PDOStatement::execute()` 发出语句。

## 参数

- **`$statement`** — 要被预处理和执行的 SQL 语句。 — 查询中的数据应正确转义。

## 返回值

`PDO::exec()` 返回 SQL 语句修改或删除影响的行数。如果没有受影响的行，则 `PDO::exec()` 返回 `0`。

> 此函数可能返回布尔值 `false`，但也可能返回等同于 `false` 的非布尔值。请阅读 布尔类型章节以获取更多信息。应使用 === 运算符来测试此函数的返回值。

下列示例错误依赖 `PDO::exec()` 的返回值，其中受影响行数为 0 的语句会导致调用 `die()`：

```php


<?php
$db->exec() or die(print_r($db->errorInfo(), true)); // 错误
?>

   
```

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**发出 DELETE 语句**

计算不带 WHERE 子句的 DELETE 语句删除的行数。

```php


<?php
$dbh = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');

/*  删除 FRUIT 数据表中满足条件的所有行 */
$count = $dbh->exec("DELETE FROM fruit");

/* 返回被删除的行数 */
print "Deleted $count rows.\n";
?>

    
```

以上示例会输出：

```text


Deleted 1 rows.

    
```

## 参见

`PDO::prepare()` `PDO::query()` `PDOStatement::execute()`
