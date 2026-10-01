---
id: "zh-php-function-pdostatement-bindparam"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::bindParam"
title: "绑定一个参数到指定的变量名"
signature: "public bool PDOStatement::bindParam(string|int $param, mixed $var, int $type = PDO::PARAM_STR, int $maxLength = 0, mixed $driverOptions = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.bindparam.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绑定一个参数到指定的变量名

## 说明

```php
public bool PDOStatement::bindParam(string|int $param, mixed $var, int $type = PDO::PARAM_STR, int $maxLength = 0, mixed $driverOptions = null)
```

绑定一个PHP变量到用作预处理的SQL语句中的对应命名占位符或问号占位符。 不同于 `PDOStatement::bindValue()` ，此变量作为引用被绑定，并只在 `PDOStatement::execute()` 被调用的时候才取其值。

大多数参数是输入参数，即，参数以只读的方式用来建立查询（但仍然可以根据 `$type` 进行转换）。一些驱动支持调用存储过程并作为输出参数返回数据，一些支持作为输入/输出参数，既发送数据又接收更新后的数据。

## 参数

- **`$param`** — 参数标识符。对于使用命名占位符的预处理语句，应是类似 `:name` 形式的参数名。对于使用问号占位符的预处理语句，应是以1开始索引的参数位置。
- **`$var`** — 绑定到 SQL 语句参数的 PHP 变量名。
- **`$type`** — 使用 `PDO::PARAM_*` 常量明确地指定参数的类型。要从存储过程中返回 INOUT 参数，需要为 `$type` 参数使用按位或操作符去设置 `PDO::PARAM_INPUT_OUTPUT` 位。
- **`$maxLength`** — 数据类型的长度。为表明参数是一个存储过程的 OUT 参数，必须明确地设置此长度。 仅当 `$type` 参数为 `PDO::PARAM_INPUT_OUTPUT` 时才有意义。
- **`$driverOptions`**

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**执行一条使用命名占位符的预处理语句**

```php


<?php
/* 通过绑定的 PHP 变量执行一条预处理语句  */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');
$sth->bindParam('calories', $calories, PDO::PARAM_INT);
/* 名称也可以以冒号“:”为前缀（可选）*/
$sth->bindParam(':colour', $colour, PDO::PARAM_STR);
$sth->execute();
?>

   
```

**执行一条使用问号占位符的预处理语句**

```php


<?php
/*  通过绑定的 PHP 变量执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindParam(1, $calories, PDO::PARAM_INT);
$sth->bindParam(2, $colour, PDO::PARAM_STR);
$sth->execute();
?>

   
```

 <example><title>Pass a NULL value into a prepared statement</title> <programlisting role="php"> <![CDATA[ <?php /* Execute a prepared statement by binding PHP variables */ $calories = 150; $colour = 'red'; $sth = $dbh->prepare('SELECT name, colour, calories FROM fruit WHERE calories < :calories AND colour = :colour'); $sth->bindParam(':calories', $calories, PDO::PARAM_INT); /* Find fruit with a NULL value in the colour column */ $sth->bindParam(':colour', $colour, PDO::PARAM_NULL); $sth->execute(); ?> ]]> </programlisting> </example> 

**使用 INOUT 参数调用一个存储过程**

```php


<?php
/* 使用 INOUT 参数调用一个存储过程 */
$colour = 'red';
$sth = $dbh->prepare('CALL puree_fruit(?)');
$sth->bindParam(1, $colour, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 12);
$sth->execute();
print "After pureeing fruit, the colour is: $colour";
?>

   
```

## 参见

`PDO::prepare()` `PDOStatement::execute()` `PDOStatement::bindValue()`
