---
id: "zh-php-function-pdostatement-bindcolumn"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::bindColumn"
title: "绑定一列到一个 PHP 变量"
signature: "public bool PDOStatement::bindColumn(string|int $column, mixed $var, int $type = PDO::PARAM_STR, int $maxLength = 0, mixed $driverOptions = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.bindcolumn.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 绑定一列到一个 PHP 变量

## 说明

```php
public bool PDOStatement::bindColumn(string|int $column, mixed $var, int $type = PDO::PARAM_STR, int $maxLength = 0, mixed $driverOptions = null)
```

`PDOStatement::bindColumn()` 安排特定变量绑定到查询结果集中的指定列。每次调用 `PDOStatement::fetch()` 或 `PDOStatement::fetchAll()` 都将更新所有绑定到列的变量。

> 在语句执行前 PDO 有关列的信息并非总是可用，可移植的应用应在 `PDOStatement::execute()` *之后* 调用此函数（方法）。
>
> 但是，当使用 *PgSQL 驱动*时，要想能绑定 LOB 列作为流，应用程序必须在调用 `PDOStatement::execute()` *之前* 调用此方法，否则大对象 OID 作为整数返回。

## 参数

- **`$column`** — 结果集中的列号（从1开始索引）或列名。如果使用列名，注意名称应该与由驱动返回的列名大小写保持一致。
- **`$var`** — 将绑定到列的 PHP 变量名称
- **`$type`** — 通过 `PDO::PARAM_*` 常量指定的参数的数据类型。
- **`$maxLength`** — 预分配提示。
- **`$driverOptions`** — 驱动的可选参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**把结果集输出绑定到 PHP 变量**

绑定结果集中的列到PHP变量是一种使每行包含的数据在应用程序中立即可用的有效方法。下面的示例演示了 PDO 怎样用多种选项和缺省值绑定和检索列。

```php


<?php
$stmt = $dbh->prepare('SELECT name, colour, calories FROM fruit');
$stmt->execute();

/* 通过列号绑定 */
$stmt->bindColumn(1, $name);
$stmt->bindColumn(2, $colour);

/* 通过列名绑定 */
$stmt->bindColumn('calories', $cals);

while ($stmt->fetch(PDO::FETCH_BOUND)) {
    print $name . "\t" . $colour . "\t" . $cals . "\n";
}

    
```

以上示例的输出类似于：

```text


apple   red     150
banana  yellow  175
kiwi    green   75
orange  orange  150
mango   red     200
strawberry      red     25

    
```

## 参见

`PDOStatement::execute()` `PDOStatement::fetch()` `PDOStatement::fetchAll()` `PDOStatement::fetchColumn()`
