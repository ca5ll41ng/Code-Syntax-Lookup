---
id: "zh-php-function-pdostatement-debugdumpparams"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::debugDumpParams"
title: "打印一条 SQL 预处理命令"
signature: "public bool|null PDOStatement::debugDumpParams()"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.debugdumpparams.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打印一条 SQL 预处理命令

## 说明

```php
public bool|null PDOStatement::debugDumpParams()
```

直接打印出一条预处理语句包含的信息。提供正在使用的 `SQL` 查询、所用参数（`Params`）的数目、参数列表及其键名或位置、名称以及查询中的位置（如果当前 POD 驱动不支持，则为 -1），类型（`param_type`）为整数且 `is_param` 为布尔值。

这是调试函数，在正常输出的情况下直接输出数据。

> 和直接将结果输出到浏览器一样，可使用输出控制函数来捕获当前函数的输出，然后(例如)保存到一个 `string` 中。

只打印此时此刻语句中的参数。额外的参数不存储在语句中，也就不会被输出。

## 参数

此函数没有参数。

## 返回值

返回 `null`, 或者错误时返回 `false`。

## 更新日志

| 版本 | 说明 |
| --- | --- |
| 7.2.0 | `PDOStatement::debugDumpParams()` 现在返回发送到数据库的 SQL，包括完整的原始查询（包括替换的占位符及其边界值）。请注意，这仅在打开模拟预处理语句时才可用。 |

## 示例

**`PDOStatement::debugDumpParams()` 使用命名参数的示例**

```php


<?php
/* 通过绑定 PHP 变量执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');
$sth->bindParam(':calories', $calories, PDO::PARAM_INT);
$sth->bindValue(':colour', $colour, PDO::PARAM_STR, 12);
$sth->execute();

$sth->debugDumpParams();

?>

   
```

以上示例会输出：

```text


SQL: [96] SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour
Params:  2
Key: Name: [9] :calories
paramno=-1
name=[9] ":calories"
is_param=1
param_type=1
Key: Name: [7] :colour
paramno=-1
name=[7] ":colour"
is_param=1
param_type=2

   
```

**`PDOStatement::debugDumpParams()` 使用未命名参数的示例**

```php


<?php

/* 通过绑定 PHP 变量执行一条预处理语句 */
$calories = 150;
$colour = 'red';
$name = 'apple';

$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindParam(1, $calories, PDO::PARAM_INT);
$sth->bindValue(2, $colour, PDO::PARAM_STR);
$sth->execute();

$sth->debugDumpParams();

?>


   
```

以上示例会输出：

```text


SQL: [82] SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?
Params:  2
Key: Position #0:
paramno=0
name=[0] ""
is_param=1
param_type=1
Key: Position #1:
paramno=1
name=[0] ""
is_param=1
param_type=2

   
```

## 参见

`PDO::prepare()` `PDOStatement::bindParam()` `PDOStatement::bindValue()`
