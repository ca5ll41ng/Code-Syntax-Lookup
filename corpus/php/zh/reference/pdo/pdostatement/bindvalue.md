---
id: "zh-php-function-pdostatement-bindvalue"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::bindValue"
title: "把一个值绑定到一个参数"
signature: "public bool PDOStatement::bindValue(string|int $param, mixed $value, int $type = PDO::PARAM_STR)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.bindvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 把一个值绑定到一个参数

## 说明

```php
public bool PDOStatement::bindValue(string|int $param, mixed $value, int $type = PDO::PARAM_STR)
```

绑定一个值到用作预处理的 SQL 语句中的对应命名占位符或问号占位符。

## 参数

- **`$param`** — 参数标识符。对于使用命名占位符的预处理语句，应是类似 `:name` 形式的参数名。对于使用问号占位符的预处理语句，应是以1开始索引的参数位置。
- **`$value`** — 绑定到参数的值
- **`$type`** — 使用 `PDO::PARAM_*` 常量明确地指定参数的类型。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**执行一条使用命名占位符的预处理语句**

```php


<?php
/* 通过绑定的 PHP 变量执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');

/* 使用名字设置参数值 */
$sth->bindValue('calories', $calories, PDO::PARAM_INT);
/* 视需要，参数名也可以以冒号“:”为前缀 */
$sth->bindValue(':colour', $colour, PDO::PARAM_STR);
$sth->execute();
?>

   
```

**执行一条使用问号占位符的预处理语句**

```php


<?php
/* 通过绑定的 PHP 变量执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindValue(1, $calories, PDO::PARAM_INT);
$sth->bindValue(2, $colour, PDO::PARAM_STR);
$sth->execute();
?>

   
```

## 参见

`PDO::prepare()` `PDOStatement::execute()` `PDOStatement::bindParam()`
