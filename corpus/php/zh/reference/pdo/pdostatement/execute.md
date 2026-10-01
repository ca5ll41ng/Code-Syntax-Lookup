---
id: "zh-php-function-pdostatement-execute"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::execute"
title: "执行预处理语句"
signature: "public bool PDOStatement::execute(array|null $params = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 执行预处理语句

## 说明

```php
public bool PDOStatement::execute(array|null $params = null)
```

执行预处理语句。如果预处理语句含有参数标记，必须选择下面其中一种做法：

- 必须调用 `PDOStatement::bindParam()` 和/或 `PDOStatement::bindValue()` 以将变量或值（分别）绑定到参数标记。如果有的话，通过关联参数标记绑定的变量来传递输入值和取得输出值
- 或必须传递只作为输入参数值的数组

## 参数

- **`$params`** — 一个元素个数和将被执行的 SQL 语句中绑定的参数一样多的数组。所有的值作为 `PDO::PARAM_STR` 对待。 — 多个值不能绑定到一个参数；比如，不允许绑定两个值到 IN（）子句中一个单独的命名参数。 — 绑定的值不能比指定的多；如果在 `$params` 中存在比 `PDO::prepare()` 预处理的SQL 指定的多的键名，则此语句将会失败并发出一个错误。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**执行绑定变量和值的预处理语句**

```php


<?php
/* 通过绑定变量和值执行预处理语句 */
$calories = 150;
$colour = 'gre';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour LIKE :colour');
$sth->bindParam('calories', $calories, PDO::PARAM_INT);
/* 名称也可以以冒号“:”为前缀（可选）*/
$sth->bindValue(':colour', "%$colour%");
$sth->execute();
?>

   
```

**使用命名值数组执行预处理语句**

```php


<?php
/* 通过传递一个含有插入值的数组执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');
$sth->execute(array('calories' => $calories, 'colour' => $colour));
/* 数组键也可以以冒号“:”为前缀（可选）*/
$sth->execute(array(':calories' => $calories, ':colour' => $colour));
?>

   
```

**使用位置值数组执行预处理语句**

```php


<?php
/* 通过传递一个插入值的数组执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->execute(array($calories, $colour));
?>

   
```

**使用绑定到位置占位符的变量执行预处理语句**

```php


<?php
/* 通过绑定 PHP 变量执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindParam(1, $calories, PDO::PARAM_INT);
$sth->bindParam(2, $colour, PDO::PARAM_STR, 12);
$sth->execute();
?>

   
```

**使用数组执行一条含有 IN 子句的预处理语句**

```php


<?php
/*  使用一个数组的值执行一条含有 IN 子句的预处理语句 */
$params = array(1, 21, 63, 171);
/*  创建一个填充了和params相同数量占位符的字符串 */
$place_holders = '?' . str_repeat(', ?', count($params) - 1);

/*
    对于 $params 数组中的每个值，要预处理的语句包含足够的未命名占位符 。
    语句被执行时， $params 数组中的值被绑定到预处理语句中的占位符。
    这和使用 PDOStatement::bindParam() 不一样，因为它需要一个引用变量。
    PDOStatement::execute() 仅作为通过值绑定的替代。
*/
$sth = $dbh->prepare("SELECT id, name FROM contacts WHERE id IN ($place_holders)");
$sth->execute($params);
?>

   
```

## 注释

> 有些驱动在执行下一条语句前需要 关闭游标 。

## 参见

`PDO::prepare()` `PDOStatement::bindParam()` `PDOStatement::fetch()` `PDOStatement::fetchAll()` `PDOStatement::fetchColumn()`
