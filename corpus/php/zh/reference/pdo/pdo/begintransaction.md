---
id: "zh-php-function-pdo-begintransaction"
language: "php"
lang: "zh"
category: "function"
name: "PDO::beginTransaction"
title: "启动一个事务"
signature: "public bool PDO::beginTransaction()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.begintransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 启动一个事务

## 说明

```php
public bool PDO::beginTransaction()
```

关闭自动提交模式。自动提交模式被关闭的同时，通过 PDO 对象实例对数据库做出的更改直到调用 `PDO::commit()` 结束事务才被提交。调用 `PDO::rollBack()` 将回滚对数据库做出的更改并将数据库连接返回到自动提交模式。

包括 MySQL 在内的一些数据库，当发出一条类似 DROP TABLE 或 CREATE TABLE 这样的 DDL 语句时，会自动进行一个隐式地事务提交。隐式地提交将阻止你在此事务范围内回滚任何其他更改。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果事务已启动或者驱动不支持事务，则抛出 `PDOException`。

> `PDO::ATTR_ERRMODE` 属性不是 `PDO::ERRMODE_EXCEPTION` 时会抛出一个异常。

## 示例

**回滚一个事务**

下面示例在回滚此更改前开始一个事务并发出两条修改数据库的语句。但在 MySQL 中，DROP TABLE 语句自动提交事务，使得在此事务中的任何更改都不会被回滚。

```php


<?php
/* 开始一个事务，关闭自动提交 */
$dbh->beginTransaction();

/*  更改数据库架构及数据 */
$sth = $dbh->exec("DROP TABLE fruit");
$sth = $dbh->exec("UPDATE dessert
    SET name = 'hamburger'");

/*  识别出错误并回滚更改 */
$dbh->rollBack();

/* 数据库连接现在返回到自动提交模式 */
?>

    
```

## 参见

`PDO::commit()` `PDO::rollBack()` 事务与自动提交
