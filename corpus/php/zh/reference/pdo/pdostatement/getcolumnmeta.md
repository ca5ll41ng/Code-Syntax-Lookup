---
id: "zh-php-function-pdostatement-getcolumnmeta"
language: "php"
lang: "zh"
category: "function"
name: "PDOStatement::getColumnMeta"
title: "返回结果集中一列的元数据"
signature: "public array|false PDOStatement::getColumnMeta(int $column)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdostatement.getcolumnmeta.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 返回结果集中一列的元数据

## 说明

```php
public array|false PDOStatement::getColumnMeta(int $column)
```

检索一个在结果集中以0开始索引的列的元数据作为一个关联数组。

> 一些驱动程序可能没有实现 `PDOStatement::getColumnMeta()`，因为它是可选的。但是，手册中记录的所有 PDO 驱动程序都实现了此功能。

## 参数

- **`$column`** — 结果集中以0开始索引的列。

## 返回值

返回一个关联数组，它包含了下列表示一个单独列的元数据的值：

| 名称 | 值 |
| --- | --- |
| `native_type` | 用于表示列值的 PHP 原生类型。 |
| `driver:decl_type` | 在数据库中用于表示列值的 SQL 类型。如果结果集中的列是一个函数的结果，则该值不能被 `PDOStatement::getColumnMeta()` 返回。 |
| `flags` | 任何设置于此列的标记。 |
| `name` | 通过数据库返回的列名。 |
| `table` | 通过数据库返回的该列的表名 |
| `len` | 该列的长度。除浮点小数外通常为 `-1` |
| `precision` | 该列的数值精度。除浮点小数外通常为 `0`。 |
| `pdo_type` | 以 `PDO::PARAM_*` 常量为代表的列类型。 |

如果结果集不存在，或者是请求的列在结果集中不存在，则返回 `false`。

 Use when ERRORS exist <refsect1 role="errors"> <title xmlns="http://docbook.org/ns/docbook">错误／异常</title> <para> When does this function throw E_* level errors, or exceptions? </para> </refsect1> 

## 示例

**检索列的元数据**

下面示例展示了在 PDO_SQLITE 中，检索一个通过函数（COUNT）生成单独列的元数据的结果。

```php


<?php
$select = $DB->query('SELECT COUNT(*) FROM fruit');
$meta = $select->getColumnMeta(0);
var_dump($meta);
?>

    
```

以上示例会输出：

```text


array(6) {
  ["native_type"]=>
  string(7) "integer"
  ["flags"]=>
  array(0) {
  }
  ["name"]=>
  string(8) "COUNT(*)"
  ["len"]=>
  int(-1)
  ["precision"]=>
  int(0)
  ["pdo_type"]=>
  int(2)
}


    
```

## 参见

`PDOStatement::columnCount()` `PDOStatement::rowCount()`
