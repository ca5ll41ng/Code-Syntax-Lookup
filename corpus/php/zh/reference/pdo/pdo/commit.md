---
id: "zh-php-function-pdo-commit"
language: "php"
lang: "zh"
category: "function"
name: "PDO::commit"
title: "提交一个事务"
signature: "public bool PDO::commit()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.commit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 提交一个事务

## 说明

```php
public bool PDO::commit()
```

提交一个事务，数据库连接返回到自动提交模式直到下次调用 `PDO::beginTransaction()` 开始一个新的事务为止。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果没有活动中的事务，则抛出 `PDOException`。

> `PDO::ATTR_ERRMODE` 属性不是 `PDO::ERRMODE_EXCEPTION` 时会抛出一个异常。

## 示例

**提交一个基础事务**

```php


<?php
/* 开始一个事务，关闭自动提交 */
$dbh->beginTransaction();

/* 在全有或全无的基础上插入多行记录（要么全部插入，要么全部不插入） */
$sql = 'INSERT INTO fruit
    (name, colour, calories)
    VALUES (?, ?, ?)';

$sth = $dbh->prepare($sql);

foreach ($fruits as $fruit) {
    $sth->execute(array(
        $fruit->name,
        $fruit->colour,
        $fruit->calories,
    ));
}

/* 提交更改 */
$dbh->commit();

/* 现在数据库连接返回到自动提交模式 */
?>

    
```

**提交一个DDL事务**

```php


<?php
/*  开始一个事务，关闭自动提交 */
$dbh->beginTransaction();

/* Change the database schema */
$sth = $dbh->exec("DROP TABLE fruit");

/* 更改数据库架构 */
$dbh->commit();

/* 现在数据库连接返回到自动提交模式 */
?>

    
```

> 并不是所有数据库都允许使用DDL语句进行事务操作：有些会产生错误，而其他一些（包括MySQL）会在遇到第一个DDL语句后就自动提交事务。

## 参见

`PDO::beginTransaction()` `PDO::rollBack()` 事务和自动提交
