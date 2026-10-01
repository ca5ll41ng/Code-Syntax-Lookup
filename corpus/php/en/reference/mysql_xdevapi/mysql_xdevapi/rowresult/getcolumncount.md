---
id: "en-php-function-mysql-xdevapi-rowresult-getcolumncount"
language: "php"
lang: "en"
category: "function"
name: "RowResult::getColumnsCount"
title: "Get column count"
signature: "public int mysql_xdevapi\\RowResult::getColumnsCount()"
module: "mysql_xdevapi"
source_url: "https://www.php.net/manual/en/mysql-xdevapi-rowresult.getcolumncount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get column count

## Description

```php
public int mysql_xdevapi\RowResult::getColumnsCount()
```

Retrieve the column count for columns present in the result set.

## Parameters

This function has no parameters.

## Return Values

The number of columns; 0 if there are none.

## Changelog

|  |  |
| --- | --- |
| 8.0.14 | Method renamed from getColumnCount() to getColumnsCount(). |

## Examples

**`mysql_xdevapi\RowResult::getColumnsCount()` example**

```php


<?php
$session = mysql_xdevapi\getSession("mysqlx://user:password@localhost");

$session->sql("DROP DATABASE addressbook")->execute();
$session->sql("CREATE DATABASE foo")->execute();
$session->sql("CREATE TABLE foo.test_table(x int)")->execute();
$session->sql("INSERT INTO addressbook.names values ('John', 42), ('Sam', 33)")->execute();

$sql = $session->sql("SELECT * from addressbook.names")->execute();

echo $sql->getColumnsCount();

   
```

The above example will output something similar to:

```text


2

   
```
