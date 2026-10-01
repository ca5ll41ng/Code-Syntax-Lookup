---
id: "zh-php-function-pdo-query"
language: "php"
lang: "zh"
category: "function"
name: "PDO::query"
title: "预处理并执行没有占位符的 SQL 语句"
signature: "public PDOStatement|false PDO::query(string $query, int|null $fetchMode = null)"
module: "pdo"
source_url: "https://www.php.net/manual/zh/pdo.query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预处理并执行没有占位符的 SQL 语句

## 说明

```php
public PDOStatement|false PDO::query(string $query, int|null $fetchMode = null)
```

```php
public PDOStatement|false PDO::query(string $query, int|null $fetchMode = PDO::FETCH_COLUMN, int $colno)
```

```php
public PDOStatement|false PDO::query(string $query, int|null $fetchMode = PDO::FETCH_CLASS, string $classname, array $constructorArgs)
```

```php
public PDOStatement|false PDO::query(string $query, int|null $fetchMode = PDO::FETCH_INTO, object $object)
```

`PDO::query()` 在单次函数调用内预处理并执行 SQL 语句，以 `PDOStatement` 对象形式返回结果集（如果有数据的话）。

如果反复调用同一个查询，用 `PDO::prepare()` 准备 `PDOStatement` 对象，并用 `PDOStatement::execute()` 执行语句，将具有更好的性能。

如果没有完整获取结果集内的数据，就调用下一个 `PDO::query()`，将可能调用失败。应当在执行下一个 `PDO::query()` 前，先用 `PDOStatement::closeCursor()` 释放数据库 `PDOStatement` 关联的资源。

> 如果 `$query` 包含占位符，则必须使用 `PDO::prepare()` 和 `PDOStatement::execute()` 方法分别预处理和执行语句。

## 参数

- **`$query`** — 预处理和执行的 SQL 语句。 — 如果 SQL 包含占位符，则必须使用 `PDO::prepare()` 和 `PDOStatement::execute()`。或者在调用 `PDO::query()` 之前手动预处理 SQL，如果驱动程序支持，使用 `PDO::quote()` 正确格式化数据。
- **`$fetchMode`** — 返回 `PDOStatement` 的默认获取模式。必须是 `PDO::FETCH_*` 常量之一。 — If this argument is passed to the function, the remaining arguments will be treated as though `PDOStatement::setFetchMode()` was called on the resultant statement object. The subsequent arguments vary depending on the selected fetch mode.

## 返回值

返回 `PDOStatement` 对象 或者在失败时返回 `false`

## 错误／异常

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_WARNING`，则发出级别为 `E_WARNING` 的错误。

如果属性 `PDO::ATTR_ERRMODE` 设置为 `PDO::ERRMODE_EXCEPTION`，则抛出 `PDOException`。

## 示例

**没有占位符的 SQL 可以使用 `PDO::query()` 执行**

```php


<?php
$sql = 'SELECT name, color, calories FROM fruit ORDER BY name';
foreach ($conn->query($sql) as $row) {
    print $row['name'] . "\t";
    print $row['color'] . "\t";
    print $row['calories'] . "\n";
}
?>

    
```

以上示例会输出：

```text


apple   red     150
banana  yellow  250
kiwi    brown   75
lemon   yellow  25
orange  orange  300
pear    green   150
watermelon      pink    90

    
```

## 参见

`PDO::exec()` `PDO::prepare()` `PDOStatement::execute()`
